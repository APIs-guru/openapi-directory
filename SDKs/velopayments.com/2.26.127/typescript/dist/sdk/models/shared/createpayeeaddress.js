var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var CreatePayeeAddressCountryEnum;
(function (CreatePayeeAddressCountryEnum) {
    CreatePayeeAddressCountryEnum["Af"] = "AF";
    CreatePayeeAddressCountryEnum["Ax"] = "AX";
    CreatePayeeAddressCountryEnum["Al"] = "AL";
    CreatePayeeAddressCountryEnum["Dz"] = "DZ";
    CreatePayeeAddressCountryEnum["As"] = "AS";
    CreatePayeeAddressCountryEnum["Ad"] = "AD";
    CreatePayeeAddressCountryEnum["Ao"] = "AO";
    CreatePayeeAddressCountryEnum["Ai"] = "AI";
    CreatePayeeAddressCountryEnum["Aq"] = "AQ";
    CreatePayeeAddressCountryEnum["Ag"] = "AG";
    CreatePayeeAddressCountryEnum["Ar"] = "AR";
    CreatePayeeAddressCountryEnum["Am"] = "AM";
    CreatePayeeAddressCountryEnum["Aw"] = "AW";
    CreatePayeeAddressCountryEnum["Au"] = "AU";
    CreatePayeeAddressCountryEnum["At"] = "AT";
    CreatePayeeAddressCountryEnum["Az"] = "AZ";
    CreatePayeeAddressCountryEnum["Bs"] = "BS";
    CreatePayeeAddressCountryEnum["Bh"] = "BH";
    CreatePayeeAddressCountryEnum["Bd"] = "BD";
    CreatePayeeAddressCountryEnum["Bb"] = "BB";
    CreatePayeeAddressCountryEnum["By"] = "BY";
    CreatePayeeAddressCountryEnum["Be"] = "BE";
    CreatePayeeAddressCountryEnum["Bz"] = "BZ";
    CreatePayeeAddressCountryEnum["Bj"] = "BJ";
    CreatePayeeAddressCountryEnum["Bm"] = "BM";
    CreatePayeeAddressCountryEnum["Bt"] = "BT";
    CreatePayeeAddressCountryEnum["Bo"] = "BO";
    CreatePayeeAddressCountryEnum["Bq"] = "BQ";
    CreatePayeeAddressCountryEnum["Ba"] = "BA";
    CreatePayeeAddressCountryEnum["Bw"] = "BW";
    CreatePayeeAddressCountryEnum["Bv"] = "BV";
    CreatePayeeAddressCountryEnum["Br"] = "BR";
    CreatePayeeAddressCountryEnum["Io"] = "IO";
    CreatePayeeAddressCountryEnum["Bn"] = "BN";
    CreatePayeeAddressCountryEnum["Bg"] = "BG";
    CreatePayeeAddressCountryEnum["Bf"] = "BF";
    CreatePayeeAddressCountryEnum["Bi"] = "BI";
    CreatePayeeAddressCountryEnum["Kh"] = "KH";
    CreatePayeeAddressCountryEnum["Cm"] = "CM";
    CreatePayeeAddressCountryEnum["Ca"] = "CA";
    CreatePayeeAddressCountryEnum["Cv"] = "CV";
    CreatePayeeAddressCountryEnum["Ky"] = "KY";
    CreatePayeeAddressCountryEnum["Cf"] = "CF";
    CreatePayeeAddressCountryEnum["Td"] = "TD";
    CreatePayeeAddressCountryEnum["Cl"] = "CL";
    CreatePayeeAddressCountryEnum["Cn"] = "CN";
    CreatePayeeAddressCountryEnum["Cx"] = "CX";
    CreatePayeeAddressCountryEnum["Cc"] = "CC";
    CreatePayeeAddressCountryEnum["Co"] = "CO";
    CreatePayeeAddressCountryEnum["Km"] = "KM";
    CreatePayeeAddressCountryEnum["Cg"] = "CG";
    CreatePayeeAddressCountryEnum["Cd"] = "CD";
    CreatePayeeAddressCountryEnum["Ck"] = "CK";
    CreatePayeeAddressCountryEnum["Cr"] = "CR";
    CreatePayeeAddressCountryEnum["Ci"] = "CI";
    CreatePayeeAddressCountryEnum["Hr"] = "HR";
    CreatePayeeAddressCountryEnum["Cu"] = "CU";
    CreatePayeeAddressCountryEnum["Cw"] = "CW";
    CreatePayeeAddressCountryEnum["Cy"] = "CY";
    CreatePayeeAddressCountryEnum["Cz"] = "CZ";
    CreatePayeeAddressCountryEnum["Dk"] = "DK";
    CreatePayeeAddressCountryEnum["Dj"] = "DJ";
    CreatePayeeAddressCountryEnum["Dm"] = "DM";
    CreatePayeeAddressCountryEnum["Do"] = "DO";
    CreatePayeeAddressCountryEnum["Ec"] = "EC";
    CreatePayeeAddressCountryEnum["Eg"] = "EG";
    CreatePayeeAddressCountryEnum["Sv"] = "SV";
    CreatePayeeAddressCountryEnum["Gq"] = "GQ";
    CreatePayeeAddressCountryEnum["Er"] = "ER";
    CreatePayeeAddressCountryEnum["Ee"] = "EE";
    CreatePayeeAddressCountryEnum["Et"] = "ET";
    CreatePayeeAddressCountryEnum["Fk"] = "FK";
    CreatePayeeAddressCountryEnum["Fo"] = "FO";
    CreatePayeeAddressCountryEnum["Fj"] = "FJ";
    CreatePayeeAddressCountryEnum["Fi"] = "FI";
    CreatePayeeAddressCountryEnum["Fr"] = "FR";
    CreatePayeeAddressCountryEnum["Gf"] = "GF";
    CreatePayeeAddressCountryEnum["Pf"] = "PF";
    CreatePayeeAddressCountryEnum["Tf"] = "TF";
    CreatePayeeAddressCountryEnum["Ga"] = "GA";
    CreatePayeeAddressCountryEnum["Gm"] = "GM";
    CreatePayeeAddressCountryEnum["Ge"] = "GE";
    CreatePayeeAddressCountryEnum["De"] = "DE";
    CreatePayeeAddressCountryEnum["Gh"] = "GH";
    CreatePayeeAddressCountryEnum["Gi"] = "GI";
    CreatePayeeAddressCountryEnum["Gr"] = "GR";
    CreatePayeeAddressCountryEnum["Gl"] = "GL";
    CreatePayeeAddressCountryEnum["Gd"] = "GD";
    CreatePayeeAddressCountryEnum["Gp"] = "GP";
    CreatePayeeAddressCountryEnum["Gu"] = "GU";
    CreatePayeeAddressCountryEnum["Gt"] = "GT";
    CreatePayeeAddressCountryEnum["Gg"] = "GG";
    CreatePayeeAddressCountryEnum["Gn"] = "GN";
    CreatePayeeAddressCountryEnum["Gw"] = "GW";
    CreatePayeeAddressCountryEnum["Gy"] = "GY";
    CreatePayeeAddressCountryEnum["Ht"] = "HT";
    CreatePayeeAddressCountryEnum["Hm"] = "HM";
    CreatePayeeAddressCountryEnum["Va"] = "VA";
    CreatePayeeAddressCountryEnum["Hn"] = "HN";
    CreatePayeeAddressCountryEnum["Hk"] = "HK";
    CreatePayeeAddressCountryEnum["Hu"] = "HU";
    CreatePayeeAddressCountryEnum["Is"] = "IS";
    CreatePayeeAddressCountryEnum["In"] = "IN";
    CreatePayeeAddressCountryEnum["Id"] = "ID";
    CreatePayeeAddressCountryEnum["Ir"] = "IR";
    CreatePayeeAddressCountryEnum["Iq"] = "IQ";
    CreatePayeeAddressCountryEnum["Ie"] = "IE";
    CreatePayeeAddressCountryEnum["Im"] = "IM";
    CreatePayeeAddressCountryEnum["Il"] = "IL";
    CreatePayeeAddressCountryEnum["It"] = "IT";
    CreatePayeeAddressCountryEnum["Jm"] = "JM";
    CreatePayeeAddressCountryEnum["Jp"] = "JP";
    CreatePayeeAddressCountryEnum["Je"] = "JE";
    CreatePayeeAddressCountryEnum["Jo"] = "JO";
    CreatePayeeAddressCountryEnum["Kz"] = "KZ";
    CreatePayeeAddressCountryEnum["Ke"] = "KE";
    CreatePayeeAddressCountryEnum["Ki"] = "KI";
    CreatePayeeAddressCountryEnum["Kp"] = "KP";
    CreatePayeeAddressCountryEnum["Kr"] = "KR";
    CreatePayeeAddressCountryEnum["Kw"] = "KW";
    CreatePayeeAddressCountryEnum["Kg"] = "KG";
    CreatePayeeAddressCountryEnum["La"] = "LA";
    CreatePayeeAddressCountryEnum["Lv"] = "LV";
    CreatePayeeAddressCountryEnum["Lb"] = "LB";
    CreatePayeeAddressCountryEnum["Ls"] = "LS";
    CreatePayeeAddressCountryEnum["Lr"] = "LR";
    CreatePayeeAddressCountryEnum["Ly"] = "LY";
    CreatePayeeAddressCountryEnum["Li"] = "LI";
    CreatePayeeAddressCountryEnum["Lt"] = "LT";
    CreatePayeeAddressCountryEnum["Lu"] = "LU";
    CreatePayeeAddressCountryEnum["Mo"] = "MO";
    CreatePayeeAddressCountryEnum["Mk"] = "MK";
    CreatePayeeAddressCountryEnum["Mg"] = "MG";
    CreatePayeeAddressCountryEnum["Mw"] = "MW";
    CreatePayeeAddressCountryEnum["My"] = "MY";
    CreatePayeeAddressCountryEnum["Mv"] = "MV";
    CreatePayeeAddressCountryEnum["Ml"] = "ML";
    CreatePayeeAddressCountryEnum["Mt"] = "MT";
    CreatePayeeAddressCountryEnum["Mh"] = "MH";
    CreatePayeeAddressCountryEnum["Mq"] = "MQ";
    CreatePayeeAddressCountryEnum["Mr"] = "MR";
    CreatePayeeAddressCountryEnum["Mu"] = "MU";
    CreatePayeeAddressCountryEnum["Yt"] = "YT";
    CreatePayeeAddressCountryEnum["Mx"] = "MX";
    CreatePayeeAddressCountryEnum["Fm"] = "FM";
    CreatePayeeAddressCountryEnum["Md"] = "MD";
    CreatePayeeAddressCountryEnum["Mc"] = "MC";
    CreatePayeeAddressCountryEnum["Mn"] = "MN";
    CreatePayeeAddressCountryEnum["Me"] = "ME";
    CreatePayeeAddressCountryEnum["Ms"] = "MS";
    CreatePayeeAddressCountryEnum["Ma"] = "MA";
    CreatePayeeAddressCountryEnum["Mz"] = "MZ";
    CreatePayeeAddressCountryEnum["Mm"] = "MM";
    CreatePayeeAddressCountryEnum["Na"] = "NA";
    CreatePayeeAddressCountryEnum["Nr"] = "NR";
    CreatePayeeAddressCountryEnum["Np"] = "NP";
    CreatePayeeAddressCountryEnum["Nl"] = "NL";
    CreatePayeeAddressCountryEnum["Nc"] = "NC";
    CreatePayeeAddressCountryEnum["Nz"] = "NZ";
    CreatePayeeAddressCountryEnum["Ni"] = "NI";
    CreatePayeeAddressCountryEnum["Ne"] = "NE";
    CreatePayeeAddressCountryEnum["Ng"] = "NG";
    CreatePayeeAddressCountryEnum["Nu"] = "NU";
    CreatePayeeAddressCountryEnum["Nf"] = "NF";
    CreatePayeeAddressCountryEnum["Mp"] = "MP";
    CreatePayeeAddressCountryEnum["No"] = "NO";
    CreatePayeeAddressCountryEnum["Om"] = "OM";
    CreatePayeeAddressCountryEnum["Pk"] = "PK";
    CreatePayeeAddressCountryEnum["Pw"] = "PW";
    CreatePayeeAddressCountryEnum["Ps"] = "PS";
    CreatePayeeAddressCountryEnum["Pa"] = "PA";
    CreatePayeeAddressCountryEnum["Pg"] = "PG";
    CreatePayeeAddressCountryEnum["Py"] = "PY";
    CreatePayeeAddressCountryEnum["Pe"] = "PE";
    CreatePayeeAddressCountryEnum["Ph"] = "PH";
    CreatePayeeAddressCountryEnum["Pn"] = "PN";
    CreatePayeeAddressCountryEnum["Pl"] = "PL";
    CreatePayeeAddressCountryEnum["Pt"] = "PT";
    CreatePayeeAddressCountryEnum["Pr"] = "PR";
    CreatePayeeAddressCountryEnum["Qa"] = "QA";
    CreatePayeeAddressCountryEnum["Re"] = "RE";
    CreatePayeeAddressCountryEnum["Ro"] = "RO";
    CreatePayeeAddressCountryEnum["Ru"] = "RU";
    CreatePayeeAddressCountryEnum["Rw"] = "RW";
    CreatePayeeAddressCountryEnum["Bl"] = "BL";
    CreatePayeeAddressCountryEnum["Sh"] = "SH";
    CreatePayeeAddressCountryEnum["Kn"] = "KN";
    CreatePayeeAddressCountryEnum["Lc"] = "LC";
    CreatePayeeAddressCountryEnum["Mf"] = "MF";
    CreatePayeeAddressCountryEnum["Pm"] = "PM";
    CreatePayeeAddressCountryEnum["Vc"] = "VC";
    CreatePayeeAddressCountryEnum["Ws"] = "WS";
    CreatePayeeAddressCountryEnum["Sm"] = "SM";
    CreatePayeeAddressCountryEnum["St"] = "ST";
    CreatePayeeAddressCountryEnum["Sa"] = "SA";
    CreatePayeeAddressCountryEnum["Sn"] = "SN";
    CreatePayeeAddressCountryEnum["Rs"] = "RS";
    CreatePayeeAddressCountryEnum["Sc"] = "SC";
    CreatePayeeAddressCountryEnum["Sl"] = "SL";
    CreatePayeeAddressCountryEnum["Sg"] = "SG";
    CreatePayeeAddressCountryEnum["Sx"] = "SX";
    CreatePayeeAddressCountryEnum["Sk"] = "SK";
    CreatePayeeAddressCountryEnum["Si"] = "SI";
    CreatePayeeAddressCountryEnum["Sb"] = "SB";
    CreatePayeeAddressCountryEnum["So"] = "SO";
    CreatePayeeAddressCountryEnum["Za"] = "ZA";
    CreatePayeeAddressCountryEnum["Gs"] = "GS";
    CreatePayeeAddressCountryEnum["Ss"] = "SS";
    CreatePayeeAddressCountryEnum["Es"] = "ES";
    CreatePayeeAddressCountryEnum["Lk"] = "LK";
    CreatePayeeAddressCountryEnum["Sd"] = "SD";
    CreatePayeeAddressCountryEnum["Sr"] = "SR";
    CreatePayeeAddressCountryEnum["Sj"] = "SJ";
    CreatePayeeAddressCountryEnum["Sz"] = "SZ";
    CreatePayeeAddressCountryEnum["Se"] = "SE";
    CreatePayeeAddressCountryEnum["Ch"] = "CH";
    CreatePayeeAddressCountryEnum["Sy"] = "SY";
    CreatePayeeAddressCountryEnum["Tw"] = "TW";
    CreatePayeeAddressCountryEnum["Tj"] = "TJ";
    CreatePayeeAddressCountryEnum["Tz"] = "TZ";
    CreatePayeeAddressCountryEnum["Th"] = "TH";
    CreatePayeeAddressCountryEnum["Tl"] = "TL";
    CreatePayeeAddressCountryEnum["Tg"] = "TG";
    CreatePayeeAddressCountryEnum["Tk"] = "TK";
    CreatePayeeAddressCountryEnum["To"] = "TO";
    CreatePayeeAddressCountryEnum["Tt"] = "TT";
    CreatePayeeAddressCountryEnum["Tn"] = "TN";
    CreatePayeeAddressCountryEnum["Tr"] = "TR";
    CreatePayeeAddressCountryEnum["Tm"] = "TM";
    CreatePayeeAddressCountryEnum["Tc"] = "TC";
    CreatePayeeAddressCountryEnum["Tv"] = "TV";
    CreatePayeeAddressCountryEnum["Ug"] = "UG";
    CreatePayeeAddressCountryEnum["Ua"] = "UA";
    CreatePayeeAddressCountryEnum["Ae"] = "AE";
    CreatePayeeAddressCountryEnum["Gb"] = "GB";
    CreatePayeeAddressCountryEnum["Us"] = "US";
    CreatePayeeAddressCountryEnum["Um"] = "UM";
    CreatePayeeAddressCountryEnum["Uy"] = "UY";
    CreatePayeeAddressCountryEnum["Uz"] = "UZ";
    CreatePayeeAddressCountryEnum["Vu"] = "VU";
    CreatePayeeAddressCountryEnum["Ve"] = "VE";
    CreatePayeeAddressCountryEnum["Vn"] = "VN";
    CreatePayeeAddressCountryEnum["Vg"] = "VG";
    CreatePayeeAddressCountryEnum["Vi"] = "VI";
    CreatePayeeAddressCountryEnum["Wf"] = "WF";
    CreatePayeeAddressCountryEnum["Eh"] = "EH";
    CreatePayeeAddressCountryEnum["Ye"] = "YE";
    CreatePayeeAddressCountryEnum["Zm"] = "ZM";
    CreatePayeeAddressCountryEnum["Zw"] = "ZW";
})(CreatePayeeAddressCountryEnum || (CreatePayeeAddressCountryEnum = {}));
var CreatePayeeAddress = /** @class */ (function (_super) {
    __extends(CreatePayeeAddress, _super);
    function CreatePayeeAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countyOrProvince" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress.prototype, "countyOrProvince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line1" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress.prototype, "line1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line2" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress.prototype, "line2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line3" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress.prototype, "line3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line4" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress.prototype, "line4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zipOrPostcode" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress.prototype, "zipOrPostcode", void 0);
    return CreatePayeeAddress;
}(SpeakeasyBase));
export { CreatePayeeAddress };
