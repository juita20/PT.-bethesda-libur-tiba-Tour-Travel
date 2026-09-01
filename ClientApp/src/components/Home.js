import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            halamanAktif: 'Home',
            showLoginModal: false,
            authMode: 'login',
            selectedProvider: '',
            userLogin: null,
            authForm: { nama: '', email: '', password: '' },
            formPemesananUmum: {
                namaPemesan: '',
                nomorTelepon: '',
                jenisLayanan: 'Explore Singapore One Day Trip',
                jenisPerjalanan: 'Pulang Pergi',
                tanggal: '2026-09-01',
                tanggalPulang: '2026-09-01',
                jumlahPax: '1 Orang',
                catatan: ''
            },
            daftarDomestik: [],
            daftarInternasional: [],
            tourPilihan: null
        };
    }

    render() {
        return (
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <h1>PT. Bethesda Libur Tiba Tour & Travel</h1>
                <p>Website sedang berjalan dengan baik.</p>
            </div>
        );
    }
}
