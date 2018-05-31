// tslint:disable:member-ordering
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Http, Response, RequestOptions } from '@angular/http';
import { Response, RequestOptions, Http, Headers } from '@angular/http';
// tslint:disable:import-blacklist

import { Observable } from 'rxjs/Observable';

@Injectable()
export class Lister {
    public cvType = [
        { display: 'Utdanning' },
        { display: 'Kurs' },
        { display: 'Efaring' },
        { display: 'Efaring hos BSI-Offshore' },
    ];

    public reqstring = 'http://ktapi.local/';


    public maanedsliste: any[] = [
        { navn: 'januar', nr: 0 },
        { navn: 'februar', nr: 1 },
        { navn: 'mars', nr: 2 },
        { navn: 'april', nr: 3 },
        { navn: 'mai', nr: 4 },
        { navn: 'juni', nr: 5 },
        { navn: 'juli', nr: 6 },
        { navn: 'august', nr: 7 },
        { navn: 'september', nr: 8 },
        { navn: 'oktober', nr: 9 },
        { navn: 'november', nr: 10 },
        { navn: 'desember', nr: 11 },

    ];

    public harRolle(rolle: string) {

        return localStorage.getItem(rolle) !== null;

        // return  true;
    }

    getMaanedsnavn(inn) {
        return this.maanedsliste[inn].navn;
    }




}



