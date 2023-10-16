import React from 'react'

const Contacts = () => {
  return (
    <div>
    <main className="section">
    <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Erevan, Armenia</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+37455774700">+374 (55) 77-47-00</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:webdev@protonmail.com">aren.sahakyan909@gmail.com</a></p>
                </li>
            </ul>

    </div>
</main>
    </div>
  )
}

export default Contacts
