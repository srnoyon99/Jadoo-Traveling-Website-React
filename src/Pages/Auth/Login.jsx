import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router';
import { AnonymouslyLogo, MainIcon, PlainLogin1, PlaneLogin2, TravellerBgLogin, TravellerLogin } from '../../ImportImages/ImportImages';
import { useAuth } from '../../Hooks/useAuth';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { login, gmailLogin, facebookLogin , anonymouslyLogin , resetPassword , currentUser } = useAuth();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const onChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (!currentUser?.emailVerifide) {
      alert("Please Verifide Your Email")
    } else (currentUser?.emailVerifide)
    login(userData.email, userData.password)

  }


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const [ forgetPassword, setForgetPassword ] = useState(false);

  const handleForgetPassword = () => {
    setForgetPassword(!forgetPassword)
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-center">

      <div className="absolute top-4 left-4 lg:left-auto lg:top-8 lg:translate-x-[350%] flex items-center justify-center z-50">
        <Link to="/">
          <img className="h-[50px] lg:h-[70px] hidden lg:block " src={MainIcon} alt="logo" />
        </Link>
      </div>

      <div className='login_bg hidden lg:block'>

        <div className='mb-[-230px]'>
          <img className='max-w-full h-auto lg:w-[1318px] lg:h-[1030px]' src={TravellerBgLogin} alt="bg" />
        </div>

        <div >
          <div className='absolute translate-y-[-600px] z-[1]'>
            <img className='max-w-full h-auto lg:w-[783.87px] lg:h-[764px] z-[1]' src={TravellerLogin} alt="login" />
          </div>

          <div className='plain1 absolute' >
            <img src={PlainLogin1} alt="plain" />
          </div>

          <div className='plain2 ' >
            <img src={PlaneLogin2} alt="plain" />
          </div>
        </div>

      </div>

      <div className=" relative bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md lg:max-w-lg p-6 md:p-8 lg:p-10 border border-gray-700/50 mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-4 tracking-widest leading-tight px-4">
            WELCOME BACK
          </h1>
          <p className=" text-gray-400 text-lg">Sign in to continue your journey</p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={gmailLogin}

            className="w-full flex items-center justify-center px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-300 group backdrop-blur-sm cursor-pointer "
          >
            <svg className="w-6 h-6 mr-5 " viewBox="0 0 24 24">
              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#ea4335 " d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-gray-200 font-medium group-hover:text-white transition-colors">Continue with Google</span>
          </button>

          <button
            onClick={facebookLogin}
            className="w-full flex items-center justify-center px-4 py-3 bg-blue-600/90 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-blue-600/25 cursor-pointer "
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="font-medium">Continue with Facebook</span>
          </button>

          <button
          onClick={anonymouslyLogin}
            className="h-[50px] w-full flex items-center justify-center px-4 py-3 bg-gray-800/90 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 backdrop-blur-sm border border-gray-600/30 hover:border-gray-500/50 cursor-pointer "
          >
            <img className=' h-10 w-10 mr-5 ' src={AnonymouslyLogo} alt="logo" />
            <span className="font-medium">Anonymously Login </span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600/50"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-gray-900/80 text-gray-400 backdrop-blur-sm">Or continue with email</span>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail color="#ffffff" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input onChange={(e) => { onChange(e), setEmail(e.target.value) }}
                name='email'
                type="email"
                id="email"
                value={email}
                onKeyPress={handleKeyPress}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock color="#ffffff" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input onChange={(e) => { onChange(e), setPassword(e.target.value) }}
                name='password'
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onKeyPress={handleKeyPress}
                className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
            </label>
             
             { forgetPassword ? <ForgetPassword handleForgetPassword={handleForgetPassword} resetPassword={resetPassword} /> :
             <>
            <label className="flex items-center cursor-pointer group">
              <input
                type='button'
                name='button'
                id='button'
                onSubmit={handleLogin}
              />
                 <button 
                 onClick={handleForgetPassword}
                 className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300">
              Forgot password?
            </button>
            </label>
             </>
             }
         
          </div>

          {/* Sign In Button */}
          <button
            type='submit'
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center">
              Sign In
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don't have an account?{' '}
          <Link to={"/auth/signup"} >
            <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 hover:underline cursor-pointer">
              Sign up
            </button>
          </Link>
        </p>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-6 right-8 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-2000"></div>
      </div>
    </div>
  );
}

const ForgetPassword = ({handleForgetPassword, resetPassword }) => {

  const [email, setEmail ] = useState('');
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const handleSetPassword = () => {
    resetPassword(email)
  }

  return (
    <div>

      <div className="relative">
              <Mail color="#ffffff" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
              onChange={(e) => { handleChange(e), setEmail(e.target.value) }}
                name='email'
                type="email"
                className="w-[275px] pl-10 hover:pl-5 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70"
                placeholder="Enter your email"
              />
            </div>

            <div className=' mt-3 ' >
              <button onClick={handleSetPassword} className='btn bg-green-600 border-none shadow-none ' > Reset Password </button>
            <button onClick={handleForgetPassword} className=' btn btn-ghost text-red-600 hover:bg-red-500 hover:text-yellow-50 hover:border-none hover:shadow-none ml-3 ' > Close </button>
            </div>

    </div>
  )
}