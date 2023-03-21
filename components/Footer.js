const Footer = () => {
  return (
    <div>

      {/* for subscribe my site */}
      <div>
        <form>
          <div>
            <label>Enter your email here</label>
            <input placeholder="Enter your email" />
          </div>
          <button>Subscribe</button>
        </form>
      </div>

      {/* social site links */}
      <div>
        <div>
          <span>Follow me here</span>
        </div>
        <div>
          <span>twitter</span>
          <span>facebook</span>
        </div>
      </div>

      {/* copy right section */}
      <div>
        <span>Copyright 2023</span>
        <span>techfans.in</span>
      </div>

    </div>
  )
}

export default Footer