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
export var CreatePayeeAddress2CountryEnum;
(function (CreatePayeeAddress2CountryEnum) {
    CreatePayeeAddress2CountryEnum["Af"] = "AF";
    CreatePayeeAddress2CountryEnum["Ax"] = "AX";
    CreatePayeeAddress2CountryEnum["Al"] = "AL";
    CreatePayeeAddress2CountryEnum["Dz"] = "DZ";
    CreatePayeeAddress2CountryEnum["As"] = "AS";
    CreatePayeeAddress2CountryEnum["Ad"] = "AD";
    CreatePayeeAddress2CountryEnum["Ao"] = "AO";
    CreatePayeeAddress2CountryEnum["Ai"] = "AI";
    CreatePayeeAddress2CountryEnum["Aq"] = "AQ";
    CreatePayeeAddress2CountryEnum["Ag"] = "AG";
    CreatePayeeAddress2CountryEnum["Ar"] = "AR";
    CreatePayeeAddress2CountryEnum["Am"] = "AM";
    CreatePayeeAddress2CountryEnum["Aw"] = "AW";
    CreatePayeeAddress2CountryEnum["Au"] = "AU";
    CreatePayeeAddress2CountryEnum["At"] = "AT";
    CreatePayeeAddress2CountryEnum["Az"] = "AZ";
    CreatePayeeAddress2CountryEnum["Bs"] = "BS";
    CreatePayeeAddress2CountryEnum["Bh"] = "BH";
    CreatePayeeAddress2CountryEnum["Bd"] = "BD";
    CreatePayeeAddress2CountryEnum["Bb"] = "BB";
    CreatePayeeAddress2CountryEnum["By"] = "BY";
    CreatePayeeAddress2CountryEnum["Be"] = "BE";
    CreatePayeeAddress2CountryEnum["Bz"] = "BZ";
    CreatePayeeAddress2CountryEnum["Bj"] = "BJ";
    CreatePayeeAddress2CountryEnum["Bm"] = "BM";
    CreatePayeeAddress2CountryEnum["Bt"] = "BT";
    CreatePayeeAddress2CountryEnum["Bo"] = "BO";
    CreatePayeeAddress2CountryEnum["Bq"] = "BQ";
    CreatePayeeAddress2CountryEnum["Ba"] = "BA";
    CreatePayeeAddress2CountryEnum["Bw"] = "BW";
    CreatePayeeAddress2CountryEnum["Bv"] = "BV";
    CreatePayeeAddress2CountryEnum["Br"] = "BR";
    CreatePayeeAddress2CountryEnum["Io"] = "IO";
    CreatePayeeAddress2CountryEnum["Bn"] = "BN";
    CreatePayeeAddress2CountryEnum["Bg"] = "BG";
    CreatePayeeAddress2CountryEnum["Bf"] = "BF";
    CreatePayeeAddress2CountryEnum["Bi"] = "BI";
    CreatePayeeAddress2CountryEnum["Kh"] = "KH";
    CreatePayeeAddress2CountryEnum["Cm"] = "CM";
    CreatePayeeAddress2CountryEnum["Ca"] = "CA";
    CreatePayeeAddress2CountryEnum["Cv"] = "CV";
    CreatePayeeAddress2CountryEnum["Ky"] = "KY";
    CreatePayeeAddress2CountryEnum["Cf"] = "CF";
    CreatePayeeAddress2CountryEnum["Td"] = "TD";
    CreatePayeeAddress2CountryEnum["Cl"] = "CL";
    CreatePayeeAddress2CountryEnum["Cn"] = "CN";
    CreatePayeeAddress2CountryEnum["Cx"] = "CX";
    CreatePayeeAddress2CountryEnum["Cc"] = "CC";
    CreatePayeeAddress2CountryEnum["Co"] = "CO";
    CreatePayeeAddress2CountryEnum["Km"] = "KM";
    CreatePayeeAddress2CountryEnum["Cg"] = "CG";
    CreatePayeeAddress2CountryEnum["Cd"] = "CD";
    CreatePayeeAddress2CountryEnum["Ck"] = "CK";
    CreatePayeeAddress2CountryEnum["Cr"] = "CR";
    CreatePayeeAddress2CountryEnum["Ci"] = "CI";
    CreatePayeeAddress2CountryEnum["Hr"] = "HR";
    CreatePayeeAddress2CountryEnum["Cu"] = "CU";
    CreatePayeeAddress2CountryEnum["Cw"] = "CW";
    CreatePayeeAddress2CountryEnum["Cy"] = "CY";
    CreatePayeeAddress2CountryEnum["Cz"] = "CZ";
    CreatePayeeAddress2CountryEnum["Dk"] = "DK";
    CreatePayeeAddress2CountryEnum["Dj"] = "DJ";
    CreatePayeeAddress2CountryEnum["Dm"] = "DM";
    CreatePayeeAddress2CountryEnum["Do"] = "DO";
    CreatePayeeAddress2CountryEnum["Ec"] = "EC";
    CreatePayeeAddress2CountryEnum["Eg"] = "EG";
    CreatePayeeAddress2CountryEnum["Sv"] = "SV";
    CreatePayeeAddress2CountryEnum["Gq"] = "GQ";
    CreatePayeeAddress2CountryEnum["Er"] = "ER";
    CreatePayeeAddress2CountryEnum["Ee"] = "EE";
    CreatePayeeAddress2CountryEnum["Et"] = "ET";
    CreatePayeeAddress2CountryEnum["Fk"] = "FK";
    CreatePayeeAddress2CountryEnum["Fo"] = "FO";
    CreatePayeeAddress2CountryEnum["Fj"] = "FJ";
    CreatePayeeAddress2CountryEnum["Fi"] = "FI";
    CreatePayeeAddress2CountryEnum["Fr"] = "FR";
    CreatePayeeAddress2CountryEnum["Gf"] = "GF";
    CreatePayeeAddress2CountryEnum["Pf"] = "PF";
    CreatePayeeAddress2CountryEnum["Tf"] = "TF";
    CreatePayeeAddress2CountryEnum["Ga"] = "GA";
    CreatePayeeAddress2CountryEnum["Gm"] = "GM";
    CreatePayeeAddress2CountryEnum["Ge"] = "GE";
    CreatePayeeAddress2CountryEnum["De"] = "DE";
    CreatePayeeAddress2CountryEnum["Gh"] = "GH";
    CreatePayeeAddress2CountryEnum["Gi"] = "GI";
    CreatePayeeAddress2CountryEnum["Gr"] = "GR";
    CreatePayeeAddress2CountryEnum["Gl"] = "GL";
    CreatePayeeAddress2CountryEnum["Gd"] = "GD";
    CreatePayeeAddress2CountryEnum["Gp"] = "GP";
    CreatePayeeAddress2CountryEnum["Gu"] = "GU";
    CreatePayeeAddress2CountryEnum["Gt"] = "GT";
    CreatePayeeAddress2CountryEnum["Gg"] = "GG";
    CreatePayeeAddress2CountryEnum["Gn"] = "GN";
    CreatePayeeAddress2CountryEnum["Gw"] = "GW";
    CreatePayeeAddress2CountryEnum["Gy"] = "GY";
    CreatePayeeAddress2CountryEnum["Ht"] = "HT";
    CreatePayeeAddress2CountryEnum["Hm"] = "HM";
    CreatePayeeAddress2CountryEnum["Va"] = "VA";
    CreatePayeeAddress2CountryEnum["Hn"] = "HN";
    CreatePayeeAddress2CountryEnum["Hk"] = "HK";
    CreatePayeeAddress2CountryEnum["Hu"] = "HU";
    CreatePayeeAddress2CountryEnum["Is"] = "IS";
    CreatePayeeAddress2CountryEnum["In"] = "IN";
    CreatePayeeAddress2CountryEnum["Id"] = "ID";
    CreatePayeeAddress2CountryEnum["Ir"] = "IR";
    CreatePayeeAddress2CountryEnum["Iq"] = "IQ";
    CreatePayeeAddress2CountryEnum["Ie"] = "IE";
    CreatePayeeAddress2CountryEnum["Im"] = "IM";
    CreatePayeeAddress2CountryEnum["Il"] = "IL";
    CreatePayeeAddress2CountryEnum["It"] = "IT";
    CreatePayeeAddress2CountryEnum["Jm"] = "JM";
    CreatePayeeAddress2CountryEnum["Jp"] = "JP";
    CreatePayeeAddress2CountryEnum["Je"] = "JE";
    CreatePayeeAddress2CountryEnum["Jo"] = "JO";
    CreatePayeeAddress2CountryEnum["Kz"] = "KZ";
    CreatePayeeAddress2CountryEnum["Ke"] = "KE";
    CreatePayeeAddress2CountryEnum["Ki"] = "KI";
    CreatePayeeAddress2CountryEnum["Kp"] = "KP";
    CreatePayeeAddress2CountryEnum["Kr"] = "KR";
    CreatePayeeAddress2CountryEnum["Kw"] = "KW";
    CreatePayeeAddress2CountryEnum["Kg"] = "KG";
    CreatePayeeAddress2CountryEnum["La"] = "LA";
    CreatePayeeAddress2CountryEnum["Lv"] = "LV";
    CreatePayeeAddress2CountryEnum["Lb"] = "LB";
    CreatePayeeAddress2CountryEnum["Ls"] = "LS";
    CreatePayeeAddress2CountryEnum["Lr"] = "LR";
    CreatePayeeAddress2CountryEnum["Ly"] = "LY";
    CreatePayeeAddress2CountryEnum["Li"] = "LI";
    CreatePayeeAddress2CountryEnum["Lt"] = "LT";
    CreatePayeeAddress2CountryEnum["Lu"] = "LU";
    CreatePayeeAddress2CountryEnum["Mo"] = "MO";
    CreatePayeeAddress2CountryEnum["Mk"] = "MK";
    CreatePayeeAddress2CountryEnum["Mg"] = "MG";
    CreatePayeeAddress2CountryEnum["Mw"] = "MW";
    CreatePayeeAddress2CountryEnum["My"] = "MY";
    CreatePayeeAddress2CountryEnum["Mv"] = "MV";
    CreatePayeeAddress2CountryEnum["Ml"] = "ML";
    CreatePayeeAddress2CountryEnum["Mt"] = "MT";
    CreatePayeeAddress2CountryEnum["Mh"] = "MH";
    CreatePayeeAddress2CountryEnum["Mq"] = "MQ";
    CreatePayeeAddress2CountryEnum["Mr"] = "MR";
    CreatePayeeAddress2CountryEnum["Mu"] = "MU";
    CreatePayeeAddress2CountryEnum["Yt"] = "YT";
    CreatePayeeAddress2CountryEnum["Mx"] = "MX";
    CreatePayeeAddress2CountryEnum["Fm"] = "FM";
    CreatePayeeAddress2CountryEnum["Md"] = "MD";
    CreatePayeeAddress2CountryEnum["Mc"] = "MC";
    CreatePayeeAddress2CountryEnum["Mn"] = "MN";
    CreatePayeeAddress2CountryEnum["Me"] = "ME";
    CreatePayeeAddress2CountryEnum["Ms"] = "MS";
    CreatePayeeAddress2CountryEnum["Ma"] = "MA";
    CreatePayeeAddress2CountryEnum["Mz"] = "MZ";
    CreatePayeeAddress2CountryEnum["Mm"] = "MM";
    CreatePayeeAddress2CountryEnum["Na"] = "NA";
    CreatePayeeAddress2CountryEnum["Nr"] = "NR";
    CreatePayeeAddress2CountryEnum["Np"] = "NP";
    CreatePayeeAddress2CountryEnum["Nl"] = "NL";
    CreatePayeeAddress2CountryEnum["Nc"] = "NC";
    CreatePayeeAddress2CountryEnum["Nz"] = "NZ";
    CreatePayeeAddress2CountryEnum["Ni"] = "NI";
    CreatePayeeAddress2CountryEnum["Ne"] = "NE";
    CreatePayeeAddress2CountryEnum["Ng"] = "NG";
    CreatePayeeAddress2CountryEnum["Nu"] = "NU";
    CreatePayeeAddress2CountryEnum["Nf"] = "NF";
    CreatePayeeAddress2CountryEnum["Mp"] = "MP";
    CreatePayeeAddress2CountryEnum["No"] = "NO";
    CreatePayeeAddress2CountryEnum["Om"] = "OM";
    CreatePayeeAddress2CountryEnum["Pk"] = "PK";
    CreatePayeeAddress2CountryEnum["Pw"] = "PW";
    CreatePayeeAddress2CountryEnum["Ps"] = "PS";
    CreatePayeeAddress2CountryEnum["Pa"] = "PA";
    CreatePayeeAddress2CountryEnum["Pg"] = "PG";
    CreatePayeeAddress2CountryEnum["Py"] = "PY";
    CreatePayeeAddress2CountryEnum["Pe"] = "PE";
    CreatePayeeAddress2CountryEnum["Ph"] = "PH";
    CreatePayeeAddress2CountryEnum["Pn"] = "PN";
    CreatePayeeAddress2CountryEnum["Pl"] = "PL";
    CreatePayeeAddress2CountryEnum["Pt"] = "PT";
    CreatePayeeAddress2CountryEnum["Pr"] = "PR";
    CreatePayeeAddress2CountryEnum["Qa"] = "QA";
    CreatePayeeAddress2CountryEnum["Re"] = "RE";
    CreatePayeeAddress2CountryEnum["Ro"] = "RO";
    CreatePayeeAddress2CountryEnum["Ru"] = "RU";
    CreatePayeeAddress2CountryEnum["Rw"] = "RW";
    CreatePayeeAddress2CountryEnum["Bl"] = "BL";
    CreatePayeeAddress2CountryEnum["Sh"] = "SH";
    CreatePayeeAddress2CountryEnum["Kn"] = "KN";
    CreatePayeeAddress2CountryEnum["Lc"] = "LC";
    CreatePayeeAddress2CountryEnum["Mf"] = "MF";
    CreatePayeeAddress2CountryEnum["Pm"] = "PM";
    CreatePayeeAddress2CountryEnum["Vc"] = "VC";
    CreatePayeeAddress2CountryEnum["Ws"] = "WS";
    CreatePayeeAddress2CountryEnum["Sm"] = "SM";
    CreatePayeeAddress2CountryEnum["St"] = "ST";
    CreatePayeeAddress2CountryEnum["Sa"] = "SA";
    CreatePayeeAddress2CountryEnum["Sn"] = "SN";
    CreatePayeeAddress2CountryEnum["Rs"] = "RS";
    CreatePayeeAddress2CountryEnum["Sc"] = "SC";
    CreatePayeeAddress2CountryEnum["Sl"] = "SL";
    CreatePayeeAddress2CountryEnum["Sg"] = "SG";
    CreatePayeeAddress2CountryEnum["Sx"] = "SX";
    CreatePayeeAddress2CountryEnum["Sk"] = "SK";
    CreatePayeeAddress2CountryEnum["Si"] = "SI";
    CreatePayeeAddress2CountryEnum["Sb"] = "SB";
    CreatePayeeAddress2CountryEnum["So"] = "SO";
    CreatePayeeAddress2CountryEnum["Za"] = "ZA";
    CreatePayeeAddress2CountryEnum["Gs"] = "GS";
    CreatePayeeAddress2CountryEnum["Ss"] = "SS";
    CreatePayeeAddress2CountryEnum["Es"] = "ES";
    CreatePayeeAddress2CountryEnum["Lk"] = "LK";
    CreatePayeeAddress2CountryEnum["Sd"] = "SD";
    CreatePayeeAddress2CountryEnum["Sr"] = "SR";
    CreatePayeeAddress2CountryEnum["Sj"] = "SJ";
    CreatePayeeAddress2CountryEnum["Sz"] = "SZ";
    CreatePayeeAddress2CountryEnum["Se"] = "SE";
    CreatePayeeAddress2CountryEnum["Ch"] = "CH";
    CreatePayeeAddress2CountryEnum["Sy"] = "SY";
    CreatePayeeAddress2CountryEnum["Tw"] = "TW";
    CreatePayeeAddress2CountryEnum["Tj"] = "TJ";
    CreatePayeeAddress2CountryEnum["Tz"] = "TZ";
    CreatePayeeAddress2CountryEnum["Th"] = "TH";
    CreatePayeeAddress2CountryEnum["Tl"] = "TL";
    CreatePayeeAddress2CountryEnum["Tg"] = "TG";
    CreatePayeeAddress2CountryEnum["Tk"] = "TK";
    CreatePayeeAddress2CountryEnum["To"] = "TO";
    CreatePayeeAddress2CountryEnum["Tt"] = "TT";
    CreatePayeeAddress2CountryEnum["Tn"] = "TN";
    CreatePayeeAddress2CountryEnum["Tr"] = "TR";
    CreatePayeeAddress2CountryEnum["Tm"] = "TM";
    CreatePayeeAddress2CountryEnum["Tc"] = "TC";
    CreatePayeeAddress2CountryEnum["Tv"] = "TV";
    CreatePayeeAddress2CountryEnum["Ug"] = "UG";
    CreatePayeeAddress2CountryEnum["Ua"] = "UA";
    CreatePayeeAddress2CountryEnum["Ae"] = "AE";
    CreatePayeeAddress2CountryEnum["Gb"] = "GB";
    CreatePayeeAddress2CountryEnum["Us"] = "US";
    CreatePayeeAddress2CountryEnum["Um"] = "UM";
    CreatePayeeAddress2CountryEnum["Uy"] = "UY";
    CreatePayeeAddress2CountryEnum["Uz"] = "UZ";
    CreatePayeeAddress2CountryEnum["Vu"] = "VU";
    CreatePayeeAddress2CountryEnum["Ve"] = "VE";
    CreatePayeeAddress2CountryEnum["Vn"] = "VN";
    CreatePayeeAddress2CountryEnum["Vg"] = "VG";
    CreatePayeeAddress2CountryEnum["Vi"] = "VI";
    CreatePayeeAddress2CountryEnum["Wf"] = "WF";
    CreatePayeeAddress2CountryEnum["Eh"] = "EH";
    CreatePayeeAddress2CountryEnum["Ye"] = "YE";
    CreatePayeeAddress2CountryEnum["Zm"] = "ZM";
    CreatePayeeAddress2CountryEnum["Zw"] = "ZW";
})(CreatePayeeAddress2CountryEnum || (CreatePayeeAddress2CountryEnum = {}));
var CreatePayeeAddress2 = /** @class */ (function (_super) {
    __extends(CreatePayeeAddress2, _super);
    function CreatePayeeAddress2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress2.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress2.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countyOrProvince" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress2.prototype, "countyOrProvince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line1" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress2.prototype, "line1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line2" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress2.prototype, "line2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line3" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress2.prototype, "line3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line4" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress2.prototype, "line4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zipOrPostcode" }),
        __metadata("design:type", String)
    ], CreatePayeeAddress2.prototype, "zipOrPostcode", void 0);
    return CreatePayeeAddress2;
}(SpeakeasyBase));
export { CreatePayeeAddress2 };
