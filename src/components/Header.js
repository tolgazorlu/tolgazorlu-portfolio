import '../index.css'

function Header() {
  return (
    <div className="header relative bg-transparent">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between  py-6 md:justify-start md:space-x-5">
          <div className="flex justify-start lg:flex-1">
            <a href="#">
              <span className="text-base font-medium text-white hover:text-sky-300">Tolga Zorlu</span>
            </a>
          </div>
            <a href="https://www.canva.com/design/DAEYKx5rwGs/-PWsbhCQT0WzaTkxlHmXzg/view?utm_content=DAEYKx5rwGs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className="text-base font-medium text-white hover:text-sky-300">
              CV
            </a>
            <a href="https://kiraathane.dev/author/tolga/" className="text-base font-medium text-white hover:text-sky-300">
              Blog
            </a>
            <a href="https://www.youtube.com/channel/UCbQ2CNMwWjNeRDaXoKi9eAA/featured" className="text-base font-medium text-white hover:text-sky-300">
              Musics
            </a>
            <a href="https://github.com/tolgazorlu" className="text-base font-medium text-white hover:text-sky-300">
              Github
            </a>
            <a href="https://www.linkedin.com/in/tolgazorlu/" className="text-base font-medium text-white hover:text-sky-300">
              Linkedin
            </a>
        </div>
      </div>
    </div>
  )
}

export default Header;