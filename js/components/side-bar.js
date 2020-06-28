class SideBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <article class="profile card">
                <header>
                    <h2>D.I. Yogyakarta</h2>
                    <p class="center">Kota Kembang Paris van Java</p>
                    <figure>
                        <img class="logo responsive-img" alt="Logo" src="image/logo.png">
                        <center><figcaption>Lambang</figcaption></center>
                    </figure>
                </header>
                <section>
                    <h3>Informasi Lainnya</h3>
                    <table>
                        <tr>
                            <th>Negara</th>
                            <td>Indonesia</td>
                        </tr>
                        <tr>
                            <th>Hari jadi</th>
                            <td>4 Maret 1950</td>
                        </tr>
                        <tr>
                            <th>Luas Total</th>
                            <td>3.185,80 km<sup>2</sup></td>
                        </tr>
                        <tr>
                            <th>Bahasa Daerah</th>
                            <td>Jawa</td>
                        </tr>
                        <tr>
                            <th>Kode Telepon</th>
                            <td>+62 22</td>
                        </tr>
                    </table>
                </section>
            </article>`;
    }
}

customElements.define("side-bar", SideBar);