function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='p-10 bg-sky-500/50 text-blue-800'>
      <div className="text-center">
        <p>Made with ❤️️ in YouCode &copy; {footerYear}</p>
      </div>
    </footer>
  )
}

export default Footer
