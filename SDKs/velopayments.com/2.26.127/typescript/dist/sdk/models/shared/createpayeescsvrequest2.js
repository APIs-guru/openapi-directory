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
import { PayeeTypeEnum } from "./payeetypeenum";
export var CreatePayeesCsvRequest2AddressCountryEnum;
(function (CreatePayeesCsvRequest2AddressCountryEnum) {
    CreatePayeesCsvRequest2AddressCountryEnum["Af"] = "AF";
    CreatePayeesCsvRequest2AddressCountryEnum["Ax"] = "AX";
    CreatePayeesCsvRequest2AddressCountryEnum["Al"] = "AL";
    CreatePayeesCsvRequest2AddressCountryEnum["Dz"] = "DZ";
    CreatePayeesCsvRequest2AddressCountryEnum["As"] = "AS";
    CreatePayeesCsvRequest2AddressCountryEnum["Ad"] = "AD";
    CreatePayeesCsvRequest2AddressCountryEnum["Ao"] = "AO";
    CreatePayeesCsvRequest2AddressCountryEnum["Ai"] = "AI";
    CreatePayeesCsvRequest2AddressCountryEnum["Aq"] = "AQ";
    CreatePayeesCsvRequest2AddressCountryEnum["Ag"] = "AG";
    CreatePayeesCsvRequest2AddressCountryEnum["Ar"] = "AR";
    CreatePayeesCsvRequest2AddressCountryEnum["Am"] = "AM";
    CreatePayeesCsvRequest2AddressCountryEnum["Aw"] = "AW";
    CreatePayeesCsvRequest2AddressCountryEnum["Au"] = "AU";
    CreatePayeesCsvRequest2AddressCountryEnum["At"] = "AT";
    CreatePayeesCsvRequest2AddressCountryEnum["Az"] = "AZ";
    CreatePayeesCsvRequest2AddressCountryEnum["Bs"] = "BS";
    CreatePayeesCsvRequest2AddressCountryEnum["Bh"] = "BH";
    CreatePayeesCsvRequest2AddressCountryEnum["Bd"] = "BD";
    CreatePayeesCsvRequest2AddressCountryEnum["Bb"] = "BB";
    CreatePayeesCsvRequest2AddressCountryEnum["By"] = "BY";
    CreatePayeesCsvRequest2AddressCountryEnum["Be"] = "BE";
    CreatePayeesCsvRequest2AddressCountryEnum["Bz"] = "BZ";
    CreatePayeesCsvRequest2AddressCountryEnum["Bj"] = "BJ";
    CreatePayeesCsvRequest2AddressCountryEnum["Bm"] = "BM";
    CreatePayeesCsvRequest2AddressCountryEnum["Bt"] = "BT";
    CreatePayeesCsvRequest2AddressCountryEnum["Bo"] = "BO";
    CreatePayeesCsvRequest2AddressCountryEnum["Bq"] = "BQ";
    CreatePayeesCsvRequest2AddressCountryEnum["Ba"] = "BA";
    CreatePayeesCsvRequest2AddressCountryEnum["Bw"] = "BW";
    CreatePayeesCsvRequest2AddressCountryEnum["Bv"] = "BV";
    CreatePayeesCsvRequest2AddressCountryEnum["Br"] = "BR";
    CreatePayeesCsvRequest2AddressCountryEnum["Io"] = "IO";
    CreatePayeesCsvRequest2AddressCountryEnum["Bn"] = "BN";
    CreatePayeesCsvRequest2AddressCountryEnum["Bg"] = "BG";
    CreatePayeesCsvRequest2AddressCountryEnum["Bf"] = "BF";
    CreatePayeesCsvRequest2AddressCountryEnum["Bi"] = "BI";
    CreatePayeesCsvRequest2AddressCountryEnum["Kh"] = "KH";
    CreatePayeesCsvRequest2AddressCountryEnum["Cm"] = "CM";
    CreatePayeesCsvRequest2AddressCountryEnum["Ca"] = "CA";
    CreatePayeesCsvRequest2AddressCountryEnum["Cv"] = "CV";
    CreatePayeesCsvRequest2AddressCountryEnum["Ky"] = "KY";
    CreatePayeesCsvRequest2AddressCountryEnum["Cf"] = "CF";
    CreatePayeesCsvRequest2AddressCountryEnum["Td"] = "TD";
    CreatePayeesCsvRequest2AddressCountryEnum["Cl"] = "CL";
    CreatePayeesCsvRequest2AddressCountryEnum["Cn"] = "CN";
    CreatePayeesCsvRequest2AddressCountryEnum["Cx"] = "CX";
    CreatePayeesCsvRequest2AddressCountryEnum["Cc"] = "CC";
    CreatePayeesCsvRequest2AddressCountryEnum["Co"] = "CO";
    CreatePayeesCsvRequest2AddressCountryEnum["Km"] = "KM";
    CreatePayeesCsvRequest2AddressCountryEnum["Cg"] = "CG";
    CreatePayeesCsvRequest2AddressCountryEnum["Cd"] = "CD";
    CreatePayeesCsvRequest2AddressCountryEnum["Ck"] = "CK";
    CreatePayeesCsvRequest2AddressCountryEnum["Cr"] = "CR";
    CreatePayeesCsvRequest2AddressCountryEnum["Ci"] = "CI";
    CreatePayeesCsvRequest2AddressCountryEnum["Hr"] = "HR";
    CreatePayeesCsvRequest2AddressCountryEnum["Cu"] = "CU";
    CreatePayeesCsvRequest2AddressCountryEnum["Cw"] = "CW";
    CreatePayeesCsvRequest2AddressCountryEnum["Cy"] = "CY";
    CreatePayeesCsvRequest2AddressCountryEnum["Cz"] = "CZ";
    CreatePayeesCsvRequest2AddressCountryEnum["Dk"] = "DK";
    CreatePayeesCsvRequest2AddressCountryEnum["Dj"] = "DJ";
    CreatePayeesCsvRequest2AddressCountryEnum["Dm"] = "DM";
    CreatePayeesCsvRequest2AddressCountryEnum["Do"] = "DO";
    CreatePayeesCsvRequest2AddressCountryEnum["Ec"] = "EC";
    CreatePayeesCsvRequest2AddressCountryEnum["Eg"] = "EG";
    CreatePayeesCsvRequest2AddressCountryEnum["Sv"] = "SV";
    CreatePayeesCsvRequest2AddressCountryEnum["Gq"] = "GQ";
    CreatePayeesCsvRequest2AddressCountryEnum["Er"] = "ER";
    CreatePayeesCsvRequest2AddressCountryEnum["Ee"] = "EE";
    CreatePayeesCsvRequest2AddressCountryEnum["Et"] = "ET";
    CreatePayeesCsvRequest2AddressCountryEnum["Fk"] = "FK";
    CreatePayeesCsvRequest2AddressCountryEnum["Fo"] = "FO";
    CreatePayeesCsvRequest2AddressCountryEnum["Fj"] = "FJ";
    CreatePayeesCsvRequest2AddressCountryEnum["Fi"] = "FI";
    CreatePayeesCsvRequest2AddressCountryEnum["Fr"] = "FR";
    CreatePayeesCsvRequest2AddressCountryEnum["Gf"] = "GF";
    CreatePayeesCsvRequest2AddressCountryEnum["Pf"] = "PF";
    CreatePayeesCsvRequest2AddressCountryEnum["Tf"] = "TF";
    CreatePayeesCsvRequest2AddressCountryEnum["Ga"] = "GA";
    CreatePayeesCsvRequest2AddressCountryEnum["Gm"] = "GM";
    CreatePayeesCsvRequest2AddressCountryEnum["Ge"] = "GE";
    CreatePayeesCsvRequest2AddressCountryEnum["De"] = "DE";
    CreatePayeesCsvRequest2AddressCountryEnum["Gh"] = "GH";
    CreatePayeesCsvRequest2AddressCountryEnum["Gi"] = "GI";
    CreatePayeesCsvRequest2AddressCountryEnum["Gr"] = "GR";
    CreatePayeesCsvRequest2AddressCountryEnum["Gl"] = "GL";
    CreatePayeesCsvRequest2AddressCountryEnum["Gd"] = "GD";
    CreatePayeesCsvRequest2AddressCountryEnum["Gp"] = "GP";
    CreatePayeesCsvRequest2AddressCountryEnum["Gu"] = "GU";
    CreatePayeesCsvRequest2AddressCountryEnum["Gt"] = "GT";
    CreatePayeesCsvRequest2AddressCountryEnum["Gg"] = "GG";
    CreatePayeesCsvRequest2AddressCountryEnum["Gn"] = "GN";
    CreatePayeesCsvRequest2AddressCountryEnum["Gw"] = "GW";
    CreatePayeesCsvRequest2AddressCountryEnum["Gy"] = "GY";
    CreatePayeesCsvRequest2AddressCountryEnum["Ht"] = "HT";
    CreatePayeesCsvRequest2AddressCountryEnum["Hm"] = "HM";
    CreatePayeesCsvRequest2AddressCountryEnum["Va"] = "VA";
    CreatePayeesCsvRequest2AddressCountryEnum["Hn"] = "HN";
    CreatePayeesCsvRequest2AddressCountryEnum["Hk"] = "HK";
    CreatePayeesCsvRequest2AddressCountryEnum["Hu"] = "HU";
    CreatePayeesCsvRequest2AddressCountryEnum["Is"] = "IS";
    CreatePayeesCsvRequest2AddressCountryEnum["In"] = "IN";
    CreatePayeesCsvRequest2AddressCountryEnum["Id"] = "ID";
    CreatePayeesCsvRequest2AddressCountryEnum["Ir"] = "IR";
    CreatePayeesCsvRequest2AddressCountryEnum["Iq"] = "IQ";
    CreatePayeesCsvRequest2AddressCountryEnum["Ie"] = "IE";
    CreatePayeesCsvRequest2AddressCountryEnum["Im"] = "IM";
    CreatePayeesCsvRequest2AddressCountryEnum["Il"] = "IL";
    CreatePayeesCsvRequest2AddressCountryEnum["It"] = "IT";
    CreatePayeesCsvRequest2AddressCountryEnum["Jm"] = "JM";
    CreatePayeesCsvRequest2AddressCountryEnum["Jp"] = "JP";
    CreatePayeesCsvRequest2AddressCountryEnum["Je"] = "JE";
    CreatePayeesCsvRequest2AddressCountryEnum["Jo"] = "JO";
    CreatePayeesCsvRequest2AddressCountryEnum["Kz"] = "KZ";
    CreatePayeesCsvRequest2AddressCountryEnum["Ke"] = "KE";
    CreatePayeesCsvRequest2AddressCountryEnum["Ki"] = "KI";
    CreatePayeesCsvRequest2AddressCountryEnum["Kp"] = "KP";
    CreatePayeesCsvRequest2AddressCountryEnum["Kr"] = "KR";
    CreatePayeesCsvRequest2AddressCountryEnum["Kw"] = "KW";
    CreatePayeesCsvRequest2AddressCountryEnum["Kg"] = "KG";
    CreatePayeesCsvRequest2AddressCountryEnum["La"] = "LA";
    CreatePayeesCsvRequest2AddressCountryEnum["Lv"] = "LV";
    CreatePayeesCsvRequest2AddressCountryEnum["Lb"] = "LB";
    CreatePayeesCsvRequest2AddressCountryEnum["Ls"] = "LS";
    CreatePayeesCsvRequest2AddressCountryEnum["Lr"] = "LR";
    CreatePayeesCsvRequest2AddressCountryEnum["Ly"] = "LY";
    CreatePayeesCsvRequest2AddressCountryEnum["Li"] = "LI";
    CreatePayeesCsvRequest2AddressCountryEnum["Lt"] = "LT";
    CreatePayeesCsvRequest2AddressCountryEnum["Lu"] = "LU";
    CreatePayeesCsvRequest2AddressCountryEnum["Mo"] = "MO";
    CreatePayeesCsvRequest2AddressCountryEnum["Mk"] = "MK";
    CreatePayeesCsvRequest2AddressCountryEnum["Mg"] = "MG";
    CreatePayeesCsvRequest2AddressCountryEnum["Mw"] = "MW";
    CreatePayeesCsvRequest2AddressCountryEnum["My"] = "MY";
    CreatePayeesCsvRequest2AddressCountryEnum["Mv"] = "MV";
    CreatePayeesCsvRequest2AddressCountryEnum["Ml"] = "ML";
    CreatePayeesCsvRequest2AddressCountryEnum["Mt"] = "MT";
    CreatePayeesCsvRequest2AddressCountryEnum["Mh"] = "MH";
    CreatePayeesCsvRequest2AddressCountryEnum["Mq"] = "MQ";
    CreatePayeesCsvRequest2AddressCountryEnum["Mr"] = "MR";
    CreatePayeesCsvRequest2AddressCountryEnum["Mu"] = "MU";
    CreatePayeesCsvRequest2AddressCountryEnum["Yt"] = "YT";
    CreatePayeesCsvRequest2AddressCountryEnum["Mx"] = "MX";
    CreatePayeesCsvRequest2AddressCountryEnum["Fm"] = "FM";
    CreatePayeesCsvRequest2AddressCountryEnum["Md"] = "MD";
    CreatePayeesCsvRequest2AddressCountryEnum["Mc"] = "MC";
    CreatePayeesCsvRequest2AddressCountryEnum["Mn"] = "MN";
    CreatePayeesCsvRequest2AddressCountryEnum["Me"] = "ME";
    CreatePayeesCsvRequest2AddressCountryEnum["Ms"] = "MS";
    CreatePayeesCsvRequest2AddressCountryEnum["Ma"] = "MA";
    CreatePayeesCsvRequest2AddressCountryEnum["Mz"] = "MZ";
    CreatePayeesCsvRequest2AddressCountryEnum["Mm"] = "MM";
    CreatePayeesCsvRequest2AddressCountryEnum["Na"] = "NA";
    CreatePayeesCsvRequest2AddressCountryEnum["Nr"] = "NR";
    CreatePayeesCsvRequest2AddressCountryEnum["Np"] = "NP";
    CreatePayeesCsvRequest2AddressCountryEnum["Nl"] = "NL";
    CreatePayeesCsvRequest2AddressCountryEnum["Nc"] = "NC";
    CreatePayeesCsvRequest2AddressCountryEnum["Nz"] = "NZ";
    CreatePayeesCsvRequest2AddressCountryEnum["Ni"] = "NI";
    CreatePayeesCsvRequest2AddressCountryEnum["Ne"] = "NE";
    CreatePayeesCsvRequest2AddressCountryEnum["Ng"] = "NG";
    CreatePayeesCsvRequest2AddressCountryEnum["Nu"] = "NU";
    CreatePayeesCsvRequest2AddressCountryEnum["Nf"] = "NF";
    CreatePayeesCsvRequest2AddressCountryEnum["Mp"] = "MP";
    CreatePayeesCsvRequest2AddressCountryEnum["No"] = "NO";
    CreatePayeesCsvRequest2AddressCountryEnum["Om"] = "OM";
    CreatePayeesCsvRequest2AddressCountryEnum["Pk"] = "PK";
    CreatePayeesCsvRequest2AddressCountryEnum["Pw"] = "PW";
    CreatePayeesCsvRequest2AddressCountryEnum["Ps"] = "PS";
    CreatePayeesCsvRequest2AddressCountryEnum["Pa"] = "PA";
    CreatePayeesCsvRequest2AddressCountryEnum["Pg"] = "PG";
    CreatePayeesCsvRequest2AddressCountryEnum["Py"] = "PY";
    CreatePayeesCsvRequest2AddressCountryEnum["Pe"] = "PE";
    CreatePayeesCsvRequest2AddressCountryEnum["Ph"] = "PH";
    CreatePayeesCsvRequest2AddressCountryEnum["Pn"] = "PN";
    CreatePayeesCsvRequest2AddressCountryEnum["Pl"] = "PL";
    CreatePayeesCsvRequest2AddressCountryEnum["Pt"] = "PT";
    CreatePayeesCsvRequest2AddressCountryEnum["Pr"] = "PR";
    CreatePayeesCsvRequest2AddressCountryEnum["Qa"] = "QA";
    CreatePayeesCsvRequest2AddressCountryEnum["Re"] = "RE";
    CreatePayeesCsvRequest2AddressCountryEnum["Ro"] = "RO";
    CreatePayeesCsvRequest2AddressCountryEnum["Ru"] = "RU";
    CreatePayeesCsvRequest2AddressCountryEnum["Rw"] = "RW";
    CreatePayeesCsvRequest2AddressCountryEnum["Bl"] = "BL";
    CreatePayeesCsvRequest2AddressCountryEnum["Sh"] = "SH";
    CreatePayeesCsvRequest2AddressCountryEnum["Kn"] = "KN";
    CreatePayeesCsvRequest2AddressCountryEnum["Lc"] = "LC";
    CreatePayeesCsvRequest2AddressCountryEnum["Mf"] = "MF";
    CreatePayeesCsvRequest2AddressCountryEnum["Pm"] = "PM";
    CreatePayeesCsvRequest2AddressCountryEnum["Vc"] = "VC";
    CreatePayeesCsvRequest2AddressCountryEnum["Ws"] = "WS";
    CreatePayeesCsvRequest2AddressCountryEnum["Sm"] = "SM";
    CreatePayeesCsvRequest2AddressCountryEnum["St"] = "ST";
    CreatePayeesCsvRequest2AddressCountryEnum["Sa"] = "SA";
    CreatePayeesCsvRequest2AddressCountryEnum["Sn"] = "SN";
    CreatePayeesCsvRequest2AddressCountryEnum["Rs"] = "RS";
    CreatePayeesCsvRequest2AddressCountryEnum["Sc"] = "SC";
    CreatePayeesCsvRequest2AddressCountryEnum["Sl"] = "SL";
    CreatePayeesCsvRequest2AddressCountryEnum["Sg"] = "SG";
    CreatePayeesCsvRequest2AddressCountryEnum["Sx"] = "SX";
    CreatePayeesCsvRequest2AddressCountryEnum["Sk"] = "SK";
    CreatePayeesCsvRequest2AddressCountryEnum["Si"] = "SI";
    CreatePayeesCsvRequest2AddressCountryEnum["Sb"] = "SB";
    CreatePayeesCsvRequest2AddressCountryEnum["So"] = "SO";
    CreatePayeesCsvRequest2AddressCountryEnum["Za"] = "ZA";
    CreatePayeesCsvRequest2AddressCountryEnum["Gs"] = "GS";
    CreatePayeesCsvRequest2AddressCountryEnum["Ss"] = "SS";
    CreatePayeesCsvRequest2AddressCountryEnum["Es"] = "ES";
    CreatePayeesCsvRequest2AddressCountryEnum["Lk"] = "LK";
    CreatePayeesCsvRequest2AddressCountryEnum["Sd"] = "SD";
    CreatePayeesCsvRequest2AddressCountryEnum["Sr"] = "SR";
    CreatePayeesCsvRequest2AddressCountryEnum["Sj"] = "SJ";
    CreatePayeesCsvRequest2AddressCountryEnum["Sz"] = "SZ";
    CreatePayeesCsvRequest2AddressCountryEnum["Se"] = "SE";
    CreatePayeesCsvRequest2AddressCountryEnum["Ch"] = "CH";
    CreatePayeesCsvRequest2AddressCountryEnum["Sy"] = "SY";
    CreatePayeesCsvRequest2AddressCountryEnum["Tw"] = "TW";
    CreatePayeesCsvRequest2AddressCountryEnum["Tj"] = "TJ";
    CreatePayeesCsvRequest2AddressCountryEnum["Tz"] = "TZ";
    CreatePayeesCsvRequest2AddressCountryEnum["Th"] = "TH";
    CreatePayeesCsvRequest2AddressCountryEnum["Tl"] = "TL";
    CreatePayeesCsvRequest2AddressCountryEnum["Tg"] = "TG";
    CreatePayeesCsvRequest2AddressCountryEnum["Tk"] = "TK";
    CreatePayeesCsvRequest2AddressCountryEnum["To"] = "TO";
    CreatePayeesCsvRequest2AddressCountryEnum["Tt"] = "TT";
    CreatePayeesCsvRequest2AddressCountryEnum["Tn"] = "TN";
    CreatePayeesCsvRequest2AddressCountryEnum["Tr"] = "TR";
    CreatePayeesCsvRequest2AddressCountryEnum["Tm"] = "TM";
    CreatePayeesCsvRequest2AddressCountryEnum["Tc"] = "TC";
    CreatePayeesCsvRequest2AddressCountryEnum["Tv"] = "TV";
    CreatePayeesCsvRequest2AddressCountryEnum["Ug"] = "UG";
    CreatePayeesCsvRequest2AddressCountryEnum["Ua"] = "UA";
    CreatePayeesCsvRequest2AddressCountryEnum["Ae"] = "AE";
    CreatePayeesCsvRequest2AddressCountryEnum["Gb"] = "GB";
    CreatePayeesCsvRequest2AddressCountryEnum["Us"] = "US";
    CreatePayeesCsvRequest2AddressCountryEnum["Um"] = "UM";
    CreatePayeesCsvRequest2AddressCountryEnum["Uy"] = "UY";
    CreatePayeesCsvRequest2AddressCountryEnum["Uz"] = "UZ";
    CreatePayeesCsvRequest2AddressCountryEnum["Vu"] = "VU";
    CreatePayeesCsvRequest2AddressCountryEnum["Ve"] = "VE";
    CreatePayeesCsvRequest2AddressCountryEnum["Vn"] = "VN";
    CreatePayeesCsvRequest2AddressCountryEnum["Vg"] = "VG";
    CreatePayeesCsvRequest2AddressCountryEnum["Vi"] = "VI";
    CreatePayeesCsvRequest2AddressCountryEnum["Wf"] = "WF";
    CreatePayeesCsvRequest2AddressCountryEnum["Eh"] = "EH";
    CreatePayeesCsvRequest2AddressCountryEnum["Ye"] = "YE";
    CreatePayeesCsvRequest2AddressCountryEnum["Zm"] = "ZM";
    CreatePayeesCsvRequest2AddressCountryEnum["Zw"] = "ZW";
})(CreatePayeesCsvRequest2AddressCountryEnum || (CreatePayeesCsvRequest2AddressCountryEnum = {}));
export var CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum;
(function (CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum) {
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Af"] = "AF";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ax"] = "AX";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Al"] = "AL";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Dz"] = "DZ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["As"] = "AS";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ad"] = "AD";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ao"] = "AO";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ai"] = "AI";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Aq"] = "AQ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ag"] = "AG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ar"] = "AR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Am"] = "AM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Aw"] = "AW";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Au"] = "AU";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["At"] = "AT";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Az"] = "AZ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bs"] = "BS";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bh"] = "BH";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bd"] = "BD";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bb"] = "BB";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["By"] = "BY";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Be"] = "BE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bz"] = "BZ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bj"] = "BJ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bm"] = "BM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bt"] = "BT";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bo"] = "BO";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bq"] = "BQ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ba"] = "BA";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bw"] = "BW";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bv"] = "BV";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Br"] = "BR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Io"] = "IO";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bn"] = "BN";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bg"] = "BG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bf"] = "BF";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bi"] = "BI";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Kh"] = "KH";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cm"] = "CM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ca"] = "CA";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cv"] = "CV";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ky"] = "KY";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cf"] = "CF";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Td"] = "TD";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cl"] = "CL";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cn"] = "CN";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cx"] = "CX";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cc"] = "CC";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Co"] = "CO";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Km"] = "KM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cg"] = "CG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cd"] = "CD";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ck"] = "CK";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cr"] = "CR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ci"] = "CI";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Hr"] = "HR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cu"] = "CU";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cw"] = "CW";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cy"] = "CY";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Cz"] = "CZ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Dk"] = "DK";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Dj"] = "DJ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Dm"] = "DM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Do"] = "DO";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ec"] = "EC";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Eg"] = "EG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sv"] = "SV";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gq"] = "GQ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Er"] = "ER";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ee"] = "EE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Et"] = "ET";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Fk"] = "FK";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Fo"] = "FO";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Fj"] = "FJ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Fi"] = "FI";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Fr"] = "FR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gf"] = "GF";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Pf"] = "PF";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tf"] = "TF";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ga"] = "GA";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gm"] = "GM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ge"] = "GE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["De"] = "DE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gh"] = "GH";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gi"] = "GI";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gr"] = "GR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gl"] = "GL";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gd"] = "GD";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gp"] = "GP";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gu"] = "GU";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gt"] = "GT";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gg"] = "GG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gn"] = "GN";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gw"] = "GW";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gy"] = "GY";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ht"] = "HT";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Hm"] = "HM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Va"] = "VA";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Hn"] = "HN";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Hk"] = "HK";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Hu"] = "HU";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Is"] = "IS";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["In"] = "IN";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Id"] = "ID";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ir"] = "IR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Iq"] = "IQ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ie"] = "IE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Im"] = "IM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Il"] = "IL";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["It"] = "IT";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Jm"] = "JM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Jp"] = "JP";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Je"] = "JE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Jo"] = "JO";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Kz"] = "KZ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ke"] = "KE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ki"] = "KI";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Kp"] = "KP";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Kr"] = "KR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Kw"] = "KW";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Kg"] = "KG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["La"] = "LA";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Lv"] = "LV";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Lb"] = "LB";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ls"] = "LS";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Lr"] = "LR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ly"] = "LY";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Li"] = "LI";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Lt"] = "LT";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Lu"] = "LU";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mo"] = "MO";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mk"] = "MK";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mg"] = "MG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mw"] = "MW";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["My"] = "MY";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mv"] = "MV";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ml"] = "ML";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mt"] = "MT";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mh"] = "MH";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mq"] = "MQ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mr"] = "MR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mu"] = "MU";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Yt"] = "YT";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mx"] = "MX";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Fm"] = "FM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Md"] = "MD";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mc"] = "MC";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mn"] = "MN";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Me"] = "ME";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ms"] = "MS";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ma"] = "MA";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mz"] = "MZ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mm"] = "MM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Na"] = "NA";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Nr"] = "NR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Np"] = "NP";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Nl"] = "NL";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Nc"] = "NC";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Nz"] = "NZ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ni"] = "NI";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ne"] = "NE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ng"] = "NG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Nu"] = "NU";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Nf"] = "NF";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mp"] = "MP";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["No"] = "NO";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Om"] = "OM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Pk"] = "PK";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Pw"] = "PW";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ps"] = "PS";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Pa"] = "PA";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Pg"] = "PG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Py"] = "PY";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Pe"] = "PE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ph"] = "PH";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Pn"] = "PN";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Pl"] = "PL";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Pt"] = "PT";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Pr"] = "PR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Qa"] = "QA";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Re"] = "RE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ro"] = "RO";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ru"] = "RU";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Rw"] = "RW";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Bl"] = "BL";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sh"] = "SH";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Kn"] = "KN";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Lc"] = "LC";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Mf"] = "MF";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Pm"] = "PM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Vc"] = "VC";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ws"] = "WS";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sm"] = "SM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["St"] = "ST";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sa"] = "SA";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sn"] = "SN";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Rs"] = "RS";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sc"] = "SC";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sl"] = "SL";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sg"] = "SG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sx"] = "SX";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sk"] = "SK";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Si"] = "SI";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sb"] = "SB";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["So"] = "SO";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Za"] = "ZA";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gs"] = "GS";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ss"] = "SS";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Es"] = "ES";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Lk"] = "LK";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sd"] = "SD";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sr"] = "SR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sj"] = "SJ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sz"] = "SZ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Se"] = "SE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ch"] = "CH";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Sy"] = "SY";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tw"] = "TW";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tj"] = "TJ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tz"] = "TZ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Th"] = "TH";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tl"] = "TL";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tg"] = "TG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tk"] = "TK";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["To"] = "TO";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tt"] = "TT";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tn"] = "TN";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tr"] = "TR";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tm"] = "TM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tc"] = "TC";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Tv"] = "TV";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ug"] = "UG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ua"] = "UA";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ae"] = "AE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Gb"] = "GB";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Us"] = "US";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Um"] = "UM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Uy"] = "UY";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Uz"] = "UZ";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Vu"] = "VU";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ve"] = "VE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Vn"] = "VN";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Vg"] = "VG";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Vi"] = "VI";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Wf"] = "WF";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Eh"] = "EH";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Ye"] = "YE";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Zm"] = "ZM";
    CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum["Zw"] = "ZW";
})(CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum || (CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum = {}));
export var CreatePayeesCsvRequest2PaymentChannelCurrencyEnum;
(function (CreatePayeesCsvRequest2PaymentChannelCurrencyEnum) {
    CreatePayeesCsvRequest2PaymentChannelCurrencyEnum["Usd"] = "USD";
    CreatePayeesCsvRequest2PaymentChannelCurrencyEnum["Gbp"] = "GBP";
    CreatePayeesCsvRequest2PaymentChannelCurrencyEnum["Eur"] = "EUR";
})(CreatePayeesCsvRequest2PaymentChannelCurrencyEnum || (CreatePayeesCsvRequest2PaymentChannelCurrencyEnum = {}));
var CreatePayeesCsvRequest2 = /** @class */ (function (_super) {
    __extends(CreatePayeesCsvRequest2, _super);
    function CreatePayeesCsvRequest2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressCity" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "addressCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressCountry" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "addressCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressCountyOrProvince" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "addressCountyOrProvince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine1" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "addressLine1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine2" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "addressLine2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine3" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "addressLine3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine4" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "addressLine4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressZipOrPostcode" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "addressZipOrPostcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challengeDescription" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "challengeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challengeValue" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "challengeValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyEIN" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "companyEin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyOperatingName" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "companyOperatingName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualDateOfBirth" }),
        __metadata("design:type", Date)
    ], CreatePayeesCsvRequest2.prototype, "individualDateOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualFirstName" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "individualFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualLastName" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "individualLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualNationalIdentification" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "individualNationalIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualOtherNames" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "individualOtherNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualTitle" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "individualTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeLanguage" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "payeeLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelAccountName" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "paymentChannelAccountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelAccountNumber" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "paymentChannelAccountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelCountryCode" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "paymentChannelCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelCurrency" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "paymentChannelCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelIban" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "paymentChannelIban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelRoutingNumber" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "paymentChannelRoutingNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteId" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "remoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest2.prototype, "type", void 0);
    return CreatePayeesCsvRequest2;
}(SpeakeasyBase));
export { CreatePayeesCsvRequest2 };
