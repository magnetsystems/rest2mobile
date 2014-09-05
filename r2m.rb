require "formula"

JAVA_MIN_VERSION = 6 

def error_no_java
  "ERROR: No Java executable found on PATH\n"
end

def error_invalid_java_version (version) 
"""  
ERROR: Incorrect Java version #{version}.
  The Magnet Mobile Generator requires Java #{JAVA_MIN_VERSION} or above.
"""
end

def error_incorrect_r2m(r2m_path)
"""
ERROR: r2m executables conflicting on PATH.
  It appears that you already have a r2m executable on your PATH: #{r2m_path} 
  Ensure that /usr/local/bin/r2m is in front of PATH to use the installed r2m.   
"""
end

def check_java
  
  java = which 'java'
  if not java 
    return error_no_java
  end
  
  version = /[0-9]+\.[0-9]+\.[\.0-9_]+/.match(`#{java} -version 2>&1| grep "java version"`).to_s
  version_numbers = version.split('.')
  if (version_numbers[1].to_i < JAVA_MIN_VERSION) 
    return error_invalid_java_version(version)
  end

  nil
end

def check_r2m
 r2m = which 'r2m'
 if r2m 
   return error_incorrect_r2m(r2m)
 end
 nil
end

class JavaDependency < Requirement
  fatal true

  @error = nil

  def message
    @error
  end

  satisfy :build_env => false do
    @error = (check_java ? check_java : "")  
    not (@error != "") 
  end

end

#
# R2m formula (devel and stable)
#
class R2m < Formula
  homepage 'http://developer.magnet.com'
  url "https://raw.githubusercontent.com/magnetsystems/r2m/master/r2m-2.3.1.0905.tar.gz"
  sha1 '5aa45c79d14494b2ef3c6505ee267bfc509dc859'

  depends_on JavaDependency => :recommended

  
  def install
    prefix.install Dir['*']
  end


  def caveats 
    issues = (check_java ? check_java : "") + (check_r2m ? check_r2m : "")
    if (issues == "") 
      return """NO CAVEATS. INSTALLATION SUCCESSFUL!
  Congratulations! The R2M has been installed under /usr/local/bin/r2m.
  To uninstall it, run 'brew remove r2m'.
"""
    end 
    return issues
  end 


end
