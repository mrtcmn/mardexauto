import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatChipInputEvent } from '@angular/material';
import { NgForm, FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';


import { ApiService } from '../apiService';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import {dataHelper} from '../services/data.helper';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'addPanel',
  templateUrl: 'addPanel.template.html',
})
export class addPanel {

  dataForm: FormGroup;
  gettingData: any;
  id: any;
  _gettingContacts: any;
  countries = new FormControl();
  countryOptions: string[] = [
    "Albania"
    ,
    "Algeria"
    ,
    "American Samoa"
    ,
    "Andorra"
    ,
    "Angola"
    ,
    "Anguilla"
    ,
    "Antarctica"
    ,
    "Antigua and Barbuda"
    ,
    "Argentina"
    ,
    "Armenia"
    ,
    "Aruba"
    ,
    "Australia"
    ,
    "Austria"
    ,
    "Azerbaijan"
    ,
    "Bahamas"
    ,
    "Bahrain"
    ,
    "Bangladesh"
    ,
    "Barbados"
    ,
    "Belarus"
    ,
    "Belgium"
    ,
    "Belize"
    ,
    "Benin"
    ,
    "Bermuda"
    ,
    "Bhutan"
    ,
    "Bolivia"
    ,
    "Bosnia and Herzegovina"
    ,
    "Botswana"
    ,
    "Bouvet Island"
    ,
    "Brazil"
    ,
    "British Antarctic Territory"
    ,
    "British Indian Ocean Territory"
    ,
    "British Virgin Islands"
    ,
    "Brunei"
    ,
    "Bulgaria"
    ,
    "Burkina Faso"
    ,
    "Burundi"
    ,
    "Cambodia"
    ,
    "Cameroon"
    ,
    "Canada"
    ,
    "Canton and Enderbury Islands"
    ,
    "Cape Verde"
    ,
    "Cayman Islands"
    ,
    "Central African Republic"
    ,
    "Chad"
    ,
    "Chile"
    ,
    "China"
    ,
    "Christmas Island"
    ,
    "Cocos [Keeling] Islands"
    ,
    "Colombia"
    ,
    "Comoros"
    ,
    "Congo - Brazzaville"
    ,
    "Congo - Kinshasa"
    ,
    "Cook Islands"
    ,
    "Costa Rica"
    ,
    "Croatia"
    ,
    "Cuba"
    ,
    "Cyprus"
    ,
    "Czech Republic"
    ,
    "Côte d’Ivoire"
    ,
    "Denmark"
    ,
    "Djibouti"
    ,
    "Dominica"
    ,
    "Dominican Republic"
    ,
    "Dronning Maud Land"
    ,
    "East Germany"
    ,
    "Ecuador"
    ,
    "Egypt"
    ,
    "El Salvador"
    ,
    "Equatorial Guinea"
    ,
    "Eritrea"
    ,
    "Estonia"
    ,
    "Ethiopia"
    ,
    "Falkland Islands"
    ,
    "Faroe Islands"
    ,
    "Fiji"
    ,
    "Finland"
    ,
    "France"
    ,
    "French Guiana"
    ,
    "French Polynesia"
    ,
    "French Southern Territories"
    ,
    "French Southern and Antarctic Territories"
    ,
    "Gabon"
    ,
    "Gambia"
    ,
    "Georgia"
    ,
    "Germany"
    ,
    "Ghana"
    ,
    "Gibraltar"
    ,
    "Greece"
    ,
    "Greenland"
    ,
    "Grenada"
    ,
    "Guadeloupe"
    ,
    "Guam"
    ,
    "Guatemala"
    ,
    "Guernsey"
    ,
    "Guinea"
    ,
    "Guinea-Bissau"
    ,
    "Guyana"
    ,
    "Haiti"
    ,
    "Heard Island and McDonald Islands"
    ,
    "Honduras"
    ,
    "Hong Kong SAR China"
    ,
    "Hungary"
    ,
    "Iceland"
    ,
    "India"
    ,
    "Indonesia"
    ,
    "Iran"
    ,
    "Iraq"
    ,
    "Ireland"
    ,
    "Isle of Man"
    ,
    "Israel"
    ,
    "Italy"
    ,
    "Jamaica"
    ,
    "Japan"
    ,
    "Jersey"
    ,
    "Johnston Island"
    ,
    "Jordan"
    ,
    "Kazakhstan"
    ,
    "Kenya"
    ,
    "Kiribati"
    ,
    "Kuwait"
    ,
    "Kyrgyzstan"
    ,
    "Laos"
    ,
    "Latvia"
    ,
    "Lebanon"
    ,
    "Lesotho"
    ,
    "Liberia"
    ,
    "Libya"
    ,
    "Liechtenstein"
    ,
    "Lithuania"
    ,
    "Luxembourg"
    ,
    "Macau SAR China"
    ,
    "Macedonia"
    ,
    "Madagascar"
    ,
    "Malawi"
    ,
    "Malaysia"
    ,
    "Maldives"
    ,
    "Mali"
    ,
    "Malta"
    ,
    "Marshall Islands"
    ,
    "Martinique"
    ,
    "Mauritania"
    ,
    "Mauritius"
    ,
    "Mayotte"
    ,
    "Metropolitan France"
    ,
    "Mexico"
    ,
    "Micronesia"
    ,
    "Midway Islands"
    ,
    "Moldova"
    ,
    "Monaco"
    ,
    "Mongolia"
    ,
    "Montenegro"
    ,
    "Montserrat"
    ,
    "Morocco"
    ,
    "Mozambique"
    ,
    "Myanmar [Burma]"
    ,
    "Namibia"
    ,
    "Nauru"
    ,
    "Nepal"
    ,
    "Netherlands"
    ,
    "Netherlands Antilles"
    ,
    "Neutral Zone"
    ,
    "New Caledonia"
    ,
    "New Zealand"
    ,
    "Nicaragua"
    ,
    "Niger"
    ,
    "Nigeria"
    ,
    "Niue"
    ,
    "Norfolk Island"
    ,
    "North Korea"
    ,
    "North Vietnam"
    ,
    "Northern Mariana Islands"
    ,
    "Norway"
    ,
    "Oman"
    ,
    "Pacific Islands Trust Territory"
    ,
    "Pakistan"
    ,
    "Palau"
    ,
    "Palestinian Territories"
    ,
    "Panama"
    ,
    "Panama Canal Zone"
    ,
    "Papua New Guinea"
    ,
    "Paraguay"
    ,
    "People's Democratic Republic of Yemen"
    ,
    "Peru"
    ,
    "Philippines"
    ,
    "Pitcairn Islands"
    ,
    "Poland"
    ,
    "Portugal"
    ,
    "Puerto Rico"
    ,
    "Qatar"
    ,
    "Romania"
    ,
    "Russia"
    ,
    "Rwanda"
    ,
    "Réunion"
    ,
    "Saint Barthélemy"
    ,
    "Saint Helena"
    ,
    "Saint Kitts and Nevis"
    ,
    "Saint Lucia"
    ,
    "Saint Martin"
    ,
    "Saint Pierre and Miquelon"
    ,
    "Saint Vincent and the Grenadines"
    ,
    "Samoa"
    ,
    "San Marino"
    ,
    "Saudi Arabia"
    ,
    "Senegal"
    ,
    "Serbia"
    ,
    "Serbia and Montenegro"
    ,
    "Seychelles"
    ,
    "Sierra Leone"
    ,
    "Singapore"
    ,
    "Slovakia"
    ,
    "Slovenia"
    ,
    "Solomon Islands"
    ,
    "Somalia"
    ,
    "South Africa"
    ,
    "South Georgia and the South Sandwich Islands"
    ,
    "South Korea"
    ,
    "Spain"
    ,
    "Sri Lanka"
    ,
    "Sudan"
    ,
    "Suriname"
    ,
    "Svalbard and Jan Mayen"
    ,
    "Swaziland"
    ,
    "Sweden"
    ,
    "Switzerland"
    ,
    "Syria"
    ,
    "São Tomé and Príncipe"
    ,
    "Taiwan"
    ,
    "Tajikistan"
    ,
    "Tanzania"
    ,
    "Thailand"
    ,
    "Timor-Leste"
    ,
    "Togo"
    ,
    "Tokelau"
    ,
    "Tonga"
    ,
    "Trinidad and Tobago"
    ,
    "Tunisia"
    ,
    "Turkey"
    ,
    "Turkmenistan"
    ,
    "Turks and Caicos Islands"
    ,
    "Tuvalu"
    ,
    "U.S. Minor Outlying Islands"
    ,
    "U.S. Miscellaneous Pacific Islands"
    ,
    "U.S. Virgin Islands"
    ,
    "Uganda"
    ,
    "Ukraine"
    ,
    "Union of Soviet Socialist Republics"
    ,
    "United Arab Emirates"
    ,
    "United Kingdom"
    ,
    "United States"
    ,
    "Unknown or Invalid Region"
    ,
    "Uruguay"
    ,
    "Uzbekistan"
    ,
    "Vanuatu"
    ,
    "Vatican City"
    ,
    "Venezuela"
    ,
    "Vietnam"
    ,
    "Wake Island"
    ,
    "Wallis and Futuna"
    ,
    "Western Sahara"
    ,
    "Yemen"
    ,
    "Zambia"
    ,
    "Zimbabwe"
    ,
    "Åland Islands"
  ];
  _val: any;
  constructor(
    public dialogRef: MatDialogRef<addPanel>,
    private ApiService: ApiService,
    private _dataHelper: dataHelper,
    private fb: FormBuilder) {
    this.dataForm = fb.group({
      'name': '',
      'website': '',
      'phone': '',
      'country': '',
      'city': '',
      'adressDetails': '',
      'notes': '',
      'assignedTo': '',
      'relatedTags': '',
      'contacts': fb.array([fb.group({
        "name": "",
        "title": "",
        "formalName": "",
        "namePrefix": "",
        "directMail": "",
        "directPhone": "",
        "defaultContact": false
      })])
    });

    if ( this._dataHelper._data != null) {
      this.gettingData = this._dataHelper._data;
      this.id = this.gettingData._id;
      this._gettingContacts = this.gettingData.contacts;
      this.contacts.setValue(this._gettingContacts);
      delete this.gettingData._id;
      delete this.gettingData.createdBy;
      this.dataForm.setValue(this.gettingData);
    }

    this.dataForm.valueChanges
      .subscribe(values => {
        this._val = values;

      });

  }
  get contacts(): FormArray {
    return this.dataForm.get('contacts') as FormArray;
  }



  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
  addItem() {
    this.contacts.push(this.fb.group({
      "name": "",
      "title": "",
      "formalName": "",
      "namePrefix": "",
      "directMail": "",
      "directPhone": "",
      "defaultContact": false
    }));
  }


  separatorKeysCodes = [ENTER, COMMA];

  fruits = [];


  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }
    console.log(this.fruits);
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  onOKClick(): void {
        this._val['relatedTags'] = this.fruits;
        console.log(this._val);
        this._val['createdBy'] = localStorage.getItem('userName');
        this.ApiService.newRecord(this._val).then(x=> {
      this.dialogRef.close(true);

    });
  }

}
