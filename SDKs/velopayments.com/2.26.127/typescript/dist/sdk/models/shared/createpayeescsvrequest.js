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
export var CreatePayeesCsvRequestAddressCountryEnum;
(function (CreatePayeesCsvRequestAddressCountryEnum) {
    CreatePayeesCsvRequestAddressCountryEnum["Af"] = "AF";
    CreatePayeesCsvRequestAddressCountryEnum["Ax"] = "AX";
    CreatePayeesCsvRequestAddressCountryEnum["Al"] = "AL";
    CreatePayeesCsvRequestAddressCountryEnum["Dz"] = "DZ";
    CreatePayeesCsvRequestAddressCountryEnum["As"] = "AS";
    CreatePayeesCsvRequestAddressCountryEnum["Ad"] = "AD";
    CreatePayeesCsvRequestAddressCountryEnum["Ao"] = "AO";
    CreatePayeesCsvRequestAddressCountryEnum["Ai"] = "AI";
    CreatePayeesCsvRequestAddressCountryEnum["Aq"] = "AQ";
    CreatePayeesCsvRequestAddressCountryEnum["Ag"] = "AG";
    CreatePayeesCsvRequestAddressCountryEnum["Ar"] = "AR";
    CreatePayeesCsvRequestAddressCountryEnum["Am"] = "AM";
    CreatePayeesCsvRequestAddressCountryEnum["Aw"] = "AW";
    CreatePayeesCsvRequestAddressCountryEnum["Au"] = "AU";
    CreatePayeesCsvRequestAddressCountryEnum["At"] = "AT";
    CreatePayeesCsvRequestAddressCountryEnum["Az"] = "AZ";
    CreatePayeesCsvRequestAddressCountryEnum["Bs"] = "BS";
    CreatePayeesCsvRequestAddressCountryEnum["Bh"] = "BH";
    CreatePayeesCsvRequestAddressCountryEnum["Bd"] = "BD";
    CreatePayeesCsvRequestAddressCountryEnum["Bb"] = "BB";
    CreatePayeesCsvRequestAddressCountryEnum["By"] = "BY";
    CreatePayeesCsvRequestAddressCountryEnum["Be"] = "BE";
    CreatePayeesCsvRequestAddressCountryEnum["Bz"] = "BZ";
    CreatePayeesCsvRequestAddressCountryEnum["Bj"] = "BJ";
    CreatePayeesCsvRequestAddressCountryEnum["Bm"] = "BM";
    CreatePayeesCsvRequestAddressCountryEnum["Bt"] = "BT";
    CreatePayeesCsvRequestAddressCountryEnum["Bo"] = "BO";
    CreatePayeesCsvRequestAddressCountryEnum["Bq"] = "BQ";
    CreatePayeesCsvRequestAddressCountryEnum["Ba"] = "BA";
    CreatePayeesCsvRequestAddressCountryEnum["Bw"] = "BW";
    CreatePayeesCsvRequestAddressCountryEnum["Bv"] = "BV";
    CreatePayeesCsvRequestAddressCountryEnum["Br"] = "BR";
    CreatePayeesCsvRequestAddressCountryEnum["Io"] = "IO";
    CreatePayeesCsvRequestAddressCountryEnum["Bn"] = "BN";
    CreatePayeesCsvRequestAddressCountryEnum["Bg"] = "BG";
    CreatePayeesCsvRequestAddressCountryEnum["Bf"] = "BF";
    CreatePayeesCsvRequestAddressCountryEnum["Bi"] = "BI";
    CreatePayeesCsvRequestAddressCountryEnum["Kh"] = "KH";
    CreatePayeesCsvRequestAddressCountryEnum["Cm"] = "CM";
    CreatePayeesCsvRequestAddressCountryEnum["Ca"] = "CA";
    CreatePayeesCsvRequestAddressCountryEnum["Cv"] = "CV";
    CreatePayeesCsvRequestAddressCountryEnum["Ky"] = "KY";
    CreatePayeesCsvRequestAddressCountryEnum["Cf"] = "CF";
    CreatePayeesCsvRequestAddressCountryEnum["Td"] = "TD";
    CreatePayeesCsvRequestAddressCountryEnum["Cl"] = "CL";
    CreatePayeesCsvRequestAddressCountryEnum["Cn"] = "CN";
    CreatePayeesCsvRequestAddressCountryEnum["Cx"] = "CX";
    CreatePayeesCsvRequestAddressCountryEnum["Cc"] = "CC";
    CreatePayeesCsvRequestAddressCountryEnum["Co"] = "CO";
    CreatePayeesCsvRequestAddressCountryEnum["Km"] = "KM";
    CreatePayeesCsvRequestAddressCountryEnum["Cg"] = "CG";
    CreatePayeesCsvRequestAddressCountryEnum["Cd"] = "CD";
    CreatePayeesCsvRequestAddressCountryEnum["Ck"] = "CK";
    CreatePayeesCsvRequestAddressCountryEnum["Cr"] = "CR";
    CreatePayeesCsvRequestAddressCountryEnum["Ci"] = "CI";
    CreatePayeesCsvRequestAddressCountryEnum["Hr"] = "HR";
    CreatePayeesCsvRequestAddressCountryEnum["Cu"] = "CU";
    CreatePayeesCsvRequestAddressCountryEnum["Cw"] = "CW";
    CreatePayeesCsvRequestAddressCountryEnum["Cy"] = "CY";
    CreatePayeesCsvRequestAddressCountryEnum["Cz"] = "CZ";
    CreatePayeesCsvRequestAddressCountryEnum["Dk"] = "DK";
    CreatePayeesCsvRequestAddressCountryEnum["Dj"] = "DJ";
    CreatePayeesCsvRequestAddressCountryEnum["Dm"] = "DM";
    CreatePayeesCsvRequestAddressCountryEnum["Do"] = "DO";
    CreatePayeesCsvRequestAddressCountryEnum["Ec"] = "EC";
    CreatePayeesCsvRequestAddressCountryEnum["Eg"] = "EG";
    CreatePayeesCsvRequestAddressCountryEnum["Sv"] = "SV";
    CreatePayeesCsvRequestAddressCountryEnum["Gq"] = "GQ";
    CreatePayeesCsvRequestAddressCountryEnum["Er"] = "ER";
    CreatePayeesCsvRequestAddressCountryEnum["Ee"] = "EE";
    CreatePayeesCsvRequestAddressCountryEnum["Et"] = "ET";
    CreatePayeesCsvRequestAddressCountryEnum["Fk"] = "FK";
    CreatePayeesCsvRequestAddressCountryEnum["Fo"] = "FO";
    CreatePayeesCsvRequestAddressCountryEnum["Fj"] = "FJ";
    CreatePayeesCsvRequestAddressCountryEnum["Fi"] = "FI";
    CreatePayeesCsvRequestAddressCountryEnum["Fr"] = "FR";
    CreatePayeesCsvRequestAddressCountryEnum["Gf"] = "GF";
    CreatePayeesCsvRequestAddressCountryEnum["Pf"] = "PF";
    CreatePayeesCsvRequestAddressCountryEnum["Tf"] = "TF";
    CreatePayeesCsvRequestAddressCountryEnum["Ga"] = "GA";
    CreatePayeesCsvRequestAddressCountryEnum["Gm"] = "GM";
    CreatePayeesCsvRequestAddressCountryEnum["Ge"] = "GE";
    CreatePayeesCsvRequestAddressCountryEnum["De"] = "DE";
    CreatePayeesCsvRequestAddressCountryEnum["Gh"] = "GH";
    CreatePayeesCsvRequestAddressCountryEnum["Gi"] = "GI";
    CreatePayeesCsvRequestAddressCountryEnum["Gr"] = "GR";
    CreatePayeesCsvRequestAddressCountryEnum["Gl"] = "GL";
    CreatePayeesCsvRequestAddressCountryEnum["Gd"] = "GD";
    CreatePayeesCsvRequestAddressCountryEnum["Gp"] = "GP";
    CreatePayeesCsvRequestAddressCountryEnum["Gu"] = "GU";
    CreatePayeesCsvRequestAddressCountryEnum["Gt"] = "GT";
    CreatePayeesCsvRequestAddressCountryEnum["Gg"] = "GG";
    CreatePayeesCsvRequestAddressCountryEnum["Gn"] = "GN";
    CreatePayeesCsvRequestAddressCountryEnum["Gw"] = "GW";
    CreatePayeesCsvRequestAddressCountryEnum["Gy"] = "GY";
    CreatePayeesCsvRequestAddressCountryEnum["Ht"] = "HT";
    CreatePayeesCsvRequestAddressCountryEnum["Hm"] = "HM";
    CreatePayeesCsvRequestAddressCountryEnum["Va"] = "VA";
    CreatePayeesCsvRequestAddressCountryEnum["Hn"] = "HN";
    CreatePayeesCsvRequestAddressCountryEnum["Hk"] = "HK";
    CreatePayeesCsvRequestAddressCountryEnum["Hu"] = "HU";
    CreatePayeesCsvRequestAddressCountryEnum["Is"] = "IS";
    CreatePayeesCsvRequestAddressCountryEnum["In"] = "IN";
    CreatePayeesCsvRequestAddressCountryEnum["Id"] = "ID";
    CreatePayeesCsvRequestAddressCountryEnum["Ir"] = "IR";
    CreatePayeesCsvRequestAddressCountryEnum["Iq"] = "IQ";
    CreatePayeesCsvRequestAddressCountryEnum["Ie"] = "IE";
    CreatePayeesCsvRequestAddressCountryEnum["Im"] = "IM";
    CreatePayeesCsvRequestAddressCountryEnum["Il"] = "IL";
    CreatePayeesCsvRequestAddressCountryEnum["It"] = "IT";
    CreatePayeesCsvRequestAddressCountryEnum["Jm"] = "JM";
    CreatePayeesCsvRequestAddressCountryEnum["Jp"] = "JP";
    CreatePayeesCsvRequestAddressCountryEnum["Je"] = "JE";
    CreatePayeesCsvRequestAddressCountryEnum["Jo"] = "JO";
    CreatePayeesCsvRequestAddressCountryEnum["Kz"] = "KZ";
    CreatePayeesCsvRequestAddressCountryEnum["Ke"] = "KE";
    CreatePayeesCsvRequestAddressCountryEnum["Ki"] = "KI";
    CreatePayeesCsvRequestAddressCountryEnum["Kp"] = "KP";
    CreatePayeesCsvRequestAddressCountryEnum["Kr"] = "KR";
    CreatePayeesCsvRequestAddressCountryEnum["Kw"] = "KW";
    CreatePayeesCsvRequestAddressCountryEnum["Kg"] = "KG";
    CreatePayeesCsvRequestAddressCountryEnum["La"] = "LA";
    CreatePayeesCsvRequestAddressCountryEnum["Lv"] = "LV";
    CreatePayeesCsvRequestAddressCountryEnum["Lb"] = "LB";
    CreatePayeesCsvRequestAddressCountryEnum["Ls"] = "LS";
    CreatePayeesCsvRequestAddressCountryEnum["Lr"] = "LR";
    CreatePayeesCsvRequestAddressCountryEnum["Ly"] = "LY";
    CreatePayeesCsvRequestAddressCountryEnum["Li"] = "LI";
    CreatePayeesCsvRequestAddressCountryEnum["Lt"] = "LT";
    CreatePayeesCsvRequestAddressCountryEnum["Lu"] = "LU";
    CreatePayeesCsvRequestAddressCountryEnum["Mo"] = "MO";
    CreatePayeesCsvRequestAddressCountryEnum["Mk"] = "MK";
    CreatePayeesCsvRequestAddressCountryEnum["Mg"] = "MG";
    CreatePayeesCsvRequestAddressCountryEnum["Mw"] = "MW";
    CreatePayeesCsvRequestAddressCountryEnum["My"] = "MY";
    CreatePayeesCsvRequestAddressCountryEnum["Mv"] = "MV";
    CreatePayeesCsvRequestAddressCountryEnum["Ml"] = "ML";
    CreatePayeesCsvRequestAddressCountryEnum["Mt"] = "MT";
    CreatePayeesCsvRequestAddressCountryEnum["Mh"] = "MH";
    CreatePayeesCsvRequestAddressCountryEnum["Mq"] = "MQ";
    CreatePayeesCsvRequestAddressCountryEnum["Mr"] = "MR";
    CreatePayeesCsvRequestAddressCountryEnum["Mu"] = "MU";
    CreatePayeesCsvRequestAddressCountryEnum["Yt"] = "YT";
    CreatePayeesCsvRequestAddressCountryEnum["Mx"] = "MX";
    CreatePayeesCsvRequestAddressCountryEnum["Fm"] = "FM";
    CreatePayeesCsvRequestAddressCountryEnum["Md"] = "MD";
    CreatePayeesCsvRequestAddressCountryEnum["Mc"] = "MC";
    CreatePayeesCsvRequestAddressCountryEnum["Mn"] = "MN";
    CreatePayeesCsvRequestAddressCountryEnum["Me"] = "ME";
    CreatePayeesCsvRequestAddressCountryEnum["Ms"] = "MS";
    CreatePayeesCsvRequestAddressCountryEnum["Ma"] = "MA";
    CreatePayeesCsvRequestAddressCountryEnum["Mz"] = "MZ";
    CreatePayeesCsvRequestAddressCountryEnum["Mm"] = "MM";
    CreatePayeesCsvRequestAddressCountryEnum["Na"] = "NA";
    CreatePayeesCsvRequestAddressCountryEnum["Nr"] = "NR";
    CreatePayeesCsvRequestAddressCountryEnum["Np"] = "NP";
    CreatePayeesCsvRequestAddressCountryEnum["Nl"] = "NL";
    CreatePayeesCsvRequestAddressCountryEnum["Nc"] = "NC";
    CreatePayeesCsvRequestAddressCountryEnum["Nz"] = "NZ";
    CreatePayeesCsvRequestAddressCountryEnum["Ni"] = "NI";
    CreatePayeesCsvRequestAddressCountryEnum["Ne"] = "NE";
    CreatePayeesCsvRequestAddressCountryEnum["Ng"] = "NG";
    CreatePayeesCsvRequestAddressCountryEnum["Nu"] = "NU";
    CreatePayeesCsvRequestAddressCountryEnum["Nf"] = "NF";
    CreatePayeesCsvRequestAddressCountryEnum["Mp"] = "MP";
    CreatePayeesCsvRequestAddressCountryEnum["No"] = "NO";
    CreatePayeesCsvRequestAddressCountryEnum["Om"] = "OM";
    CreatePayeesCsvRequestAddressCountryEnum["Pk"] = "PK";
    CreatePayeesCsvRequestAddressCountryEnum["Pw"] = "PW";
    CreatePayeesCsvRequestAddressCountryEnum["Ps"] = "PS";
    CreatePayeesCsvRequestAddressCountryEnum["Pa"] = "PA";
    CreatePayeesCsvRequestAddressCountryEnum["Pg"] = "PG";
    CreatePayeesCsvRequestAddressCountryEnum["Py"] = "PY";
    CreatePayeesCsvRequestAddressCountryEnum["Pe"] = "PE";
    CreatePayeesCsvRequestAddressCountryEnum["Ph"] = "PH";
    CreatePayeesCsvRequestAddressCountryEnum["Pn"] = "PN";
    CreatePayeesCsvRequestAddressCountryEnum["Pl"] = "PL";
    CreatePayeesCsvRequestAddressCountryEnum["Pt"] = "PT";
    CreatePayeesCsvRequestAddressCountryEnum["Pr"] = "PR";
    CreatePayeesCsvRequestAddressCountryEnum["Qa"] = "QA";
    CreatePayeesCsvRequestAddressCountryEnum["Re"] = "RE";
    CreatePayeesCsvRequestAddressCountryEnum["Ro"] = "RO";
    CreatePayeesCsvRequestAddressCountryEnum["Ru"] = "RU";
    CreatePayeesCsvRequestAddressCountryEnum["Rw"] = "RW";
    CreatePayeesCsvRequestAddressCountryEnum["Bl"] = "BL";
    CreatePayeesCsvRequestAddressCountryEnum["Sh"] = "SH";
    CreatePayeesCsvRequestAddressCountryEnum["Kn"] = "KN";
    CreatePayeesCsvRequestAddressCountryEnum["Lc"] = "LC";
    CreatePayeesCsvRequestAddressCountryEnum["Mf"] = "MF";
    CreatePayeesCsvRequestAddressCountryEnum["Pm"] = "PM";
    CreatePayeesCsvRequestAddressCountryEnum["Vc"] = "VC";
    CreatePayeesCsvRequestAddressCountryEnum["Ws"] = "WS";
    CreatePayeesCsvRequestAddressCountryEnum["Sm"] = "SM";
    CreatePayeesCsvRequestAddressCountryEnum["St"] = "ST";
    CreatePayeesCsvRequestAddressCountryEnum["Sa"] = "SA";
    CreatePayeesCsvRequestAddressCountryEnum["Sn"] = "SN";
    CreatePayeesCsvRequestAddressCountryEnum["Rs"] = "RS";
    CreatePayeesCsvRequestAddressCountryEnum["Sc"] = "SC";
    CreatePayeesCsvRequestAddressCountryEnum["Sl"] = "SL";
    CreatePayeesCsvRequestAddressCountryEnum["Sg"] = "SG";
    CreatePayeesCsvRequestAddressCountryEnum["Sx"] = "SX";
    CreatePayeesCsvRequestAddressCountryEnum["Sk"] = "SK";
    CreatePayeesCsvRequestAddressCountryEnum["Si"] = "SI";
    CreatePayeesCsvRequestAddressCountryEnum["Sb"] = "SB";
    CreatePayeesCsvRequestAddressCountryEnum["So"] = "SO";
    CreatePayeesCsvRequestAddressCountryEnum["Za"] = "ZA";
    CreatePayeesCsvRequestAddressCountryEnum["Gs"] = "GS";
    CreatePayeesCsvRequestAddressCountryEnum["Ss"] = "SS";
    CreatePayeesCsvRequestAddressCountryEnum["Es"] = "ES";
    CreatePayeesCsvRequestAddressCountryEnum["Lk"] = "LK";
    CreatePayeesCsvRequestAddressCountryEnum["Sd"] = "SD";
    CreatePayeesCsvRequestAddressCountryEnum["Sr"] = "SR";
    CreatePayeesCsvRequestAddressCountryEnum["Sj"] = "SJ";
    CreatePayeesCsvRequestAddressCountryEnum["Sz"] = "SZ";
    CreatePayeesCsvRequestAddressCountryEnum["Se"] = "SE";
    CreatePayeesCsvRequestAddressCountryEnum["Ch"] = "CH";
    CreatePayeesCsvRequestAddressCountryEnum["Sy"] = "SY";
    CreatePayeesCsvRequestAddressCountryEnum["Tw"] = "TW";
    CreatePayeesCsvRequestAddressCountryEnum["Tj"] = "TJ";
    CreatePayeesCsvRequestAddressCountryEnum["Tz"] = "TZ";
    CreatePayeesCsvRequestAddressCountryEnum["Th"] = "TH";
    CreatePayeesCsvRequestAddressCountryEnum["Tl"] = "TL";
    CreatePayeesCsvRequestAddressCountryEnum["Tg"] = "TG";
    CreatePayeesCsvRequestAddressCountryEnum["Tk"] = "TK";
    CreatePayeesCsvRequestAddressCountryEnum["To"] = "TO";
    CreatePayeesCsvRequestAddressCountryEnum["Tt"] = "TT";
    CreatePayeesCsvRequestAddressCountryEnum["Tn"] = "TN";
    CreatePayeesCsvRequestAddressCountryEnum["Tr"] = "TR";
    CreatePayeesCsvRequestAddressCountryEnum["Tm"] = "TM";
    CreatePayeesCsvRequestAddressCountryEnum["Tc"] = "TC";
    CreatePayeesCsvRequestAddressCountryEnum["Tv"] = "TV";
    CreatePayeesCsvRequestAddressCountryEnum["Ug"] = "UG";
    CreatePayeesCsvRequestAddressCountryEnum["Ua"] = "UA";
    CreatePayeesCsvRequestAddressCountryEnum["Ae"] = "AE";
    CreatePayeesCsvRequestAddressCountryEnum["Gb"] = "GB";
    CreatePayeesCsvRequestAddressCountryEnum["Us"] = "US";
    CreatePayeesCsvRequestAddressCountryEnum["Um"] = "UM";
    CreatePayeesCsvRequestAddressCountryEnum["Uy"] = "UY";
    CreatePayeesCsvRequestAddressCountryEnum["Uz"] = "UZ";
    CreatePayeesCsvRequestAddressCountryEnum["Vu"] = "VU";
    CreatePayeesCsvRequestAddressCountryEnum["Ve"] = "VE";
    CreatePayeesCsvRequestAddressCountryEnum["Vn"] = "VN";
    CreatePayeesCsvRequestAddressCountryEnum["Vg"] = "VG";
    CreatePayeesCsvRequestAddressCountryEnum["Vi"] = "VI";
    CreatePayeesCsvRequestAddressCountryEnum["Wf"] = "WF";
    CreatePayeesCsvRequestAddressCountryEnum["Eh"] = "EH";
    CreatePayeesCsvRequestAddressCountryEnum["Ye"] = "YE";
    CreatePayeesCsvRequestAddressCountryEnum["Zm"] = "ZM";
    CreatePayeesCsvRequestAddressCountryEnum["Zw"] = "ZW";
})(CreatePayeesCsvRequestAddressCountryEnum || (CreatePayeesCsvRequestAddressCountryEnum = {}));
export var CreatePayeesCsvRequestPaymentChannelCountryCodeEnum;
(function (CreatePayeesCsvRequestPaymentChannelCountryCodeEnum) {
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Af"] = "AF";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ax"] = "AX";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Al"] = "AL";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Dz"] = "DZ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["As"] = "AS";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ad"] = "AD";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ao"] = "AO";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ai"] = "AI";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Aq"] = "AQ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ag"] = "AG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ar"] = "AR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Am"] = "AM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Aw"] = "AW";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Au"] = "AU";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["At"] = "AT";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Az"] = "AZ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bs"] = "BS";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bh"] = "BH";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bd"] = "BD";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bb"] = "BB";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["By"] = "BY";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Be"] = "BE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bz"] = "BZ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bj"] = "BJ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bm"] = "BM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bt"] = "BT";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bo"] = "BO";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bq"] = "BQ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ba"] = "BA";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bw"] = "BW";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bv"] = "BV";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Br"] = "BR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Io"] = "IO";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bn"] = "BN";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bg"] = "BG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bf"] = "BF";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bi"] = "BI";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Kh"] = "KH";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cm"] = "CM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ca"] = "CA";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cv"] = "CV";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ky"] = "KY";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cf"] = "CF";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Td"] = "TD";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cl"] = "CL";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cn"] = "CN";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cx"] = "CX";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cc"] = "CC";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Co"] = "CO";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Km"] = "KM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cg"] = "CG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cd"] = "CD";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ck"] = "CK";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cr"] = "CR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ci"] = "CI";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Hr"] = "HR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cu"] = "CU";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cw"] = "CW";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cy"] = "CY";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Cz"] = "CZ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Dk"] = "DK";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Dj"] = "DJ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Dm"] = "DM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Do"] = "DO";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ec"] = "EC";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Eg"] = "EG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sv"] = "SV";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gq"] = "GQ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Er"] = "ER";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ee"] = "EE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Et"] = "ET";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Fk"] = "FK";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Fo"] = "FO";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Fj"] = "FJ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Fi"] = "FI";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Fr"] = "FR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gf"] = "GF";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Pf"] = "PF";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tf"] = "TF";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ga"] = "GA";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gm"] = "GM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ge"] = "GE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["De"] = "DE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gh"] = "GH";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gi"] = "GI";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gr"] = "GR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gl"] = "GL";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gd"] = "GD";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gp"] = "GP";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gu"] = "GU";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gt"] = "GT";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gg"] = "GG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gn"] = "GN";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gw"] = "GW";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gy"] = "GY";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ht"] = "HT";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Hm"] = "HM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Va"] = "VA";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Hn"] = "HN";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Hk"] = "HK";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Hu"] = "HU";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Is"] = "IS";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["In"] = "IN";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Id"] = "ID";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ir"] = "IR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Iq"] = "IQ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ie"] = "IE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Im"] = "IM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Il"] = "IL";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["It"] = "IT";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Jm"] = "JM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Jp"] = "JP";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Je"] = "JE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Jo"] = "JO";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Kz"] = "KZ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ke"] = "KE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ki"] = "KI";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Kp"] = "KP";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Kr"] = "KR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Kw"] = "KW";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Kg"] = "KG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["La"] = "LA";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Lv"] = "LV";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Lb"] = "LB";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ls"] = "LS";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Lr"] = "LR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ly"] = "LY";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Li"] = "LI";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Lt"] = "LT";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Lu"] = "LU";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mo"] = "MO";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mk"] = "MK";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mg"] = "MG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mw"] = "MW";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["My"] = "MY";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mv"] = "MV";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ml"] = "ML";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mt"] = "MT";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mh"] = "MH";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mq"] = "MQ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mr"] = "MR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mu"] = "MU";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Yt"] = "YT";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mx"] = "MX";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Fm"] = "FM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Md"] = "MD";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mc"] = "MC";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mn"] = "MN";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Me"] = "ME";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ms"] = "MS";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ma"] = "MA";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mz"] = "MZ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mm"] = "MM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Na"] = "NA";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Nr"] = "NR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Np"] = "NP";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Nl"] = "NL";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Nc"] = "NC";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Nz"] = "NZ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ni"] = "NI";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ne"] = "NE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ng"] = "NG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Nu"] = "NU";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Nf"] = "NF";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mp"] = "MP";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["No"] = "NO";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Om"] = "OM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Pk"] = "PK";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Pw"] = "PW";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ps"] = "PS";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Pa"] = "PA";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Pg"] = "PG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Py"] = "PY";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Pe"] = "PE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ph"] = "PH";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Pn"] = "PN";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Pl"] = "PL";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Pt"] = "PT";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Pr"] = "PR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Qa"] = "QA";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Re"] = "RE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ro"] = "RO";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ru"] = "RU";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Rw"] = "RW";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Bl"] = "BL";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sh"] = "SH";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Kn"] = "KN";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Lc"] = "LC";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Mf"] = "MF";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Pm"] = "PM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Vc"] = "VC";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ws"] = "WS";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sm"] = "SM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["St"] = "ST";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sa"] = "SA";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sn"] = "SN";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Rs"] = "RS";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sc"] = "SC";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sl"] = "SL";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sg"] = "SG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sx"] = "SX";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sk"] = "SK";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Si"] = "SI";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sb"] = "SB";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["So"] = "SO";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Za"] = "ZA";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gs"] = "GS";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ss"] = "SS";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Es"] = "ES";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Lk"] = "LK";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sd"] = "SD";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sr"] = "SR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sj"] = "SJ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sz"] = "SZ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Se"] = "SE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ch"] = "CH";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Sy"] = "SY";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tw"] = "TW";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tj"] = "TJ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tz"] = "TZ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Th"] = "TH";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tl"] = "TL";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tg"] = "TG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tk"] = "TK";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["To"] = "TO";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tt"] = "TT";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tn"] = "TN";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tr"] = "TR";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tm"] = "TM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tc"] = "TC";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Tv"] = "TV";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ug"] = "UG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ua"] = "UA";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ae"] = "AE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Gb"] = "GB";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Us"] = "US";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Um"] = "UM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Uy"] = "UY";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Uz"] = "UZ";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Vu"] = "VU";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ve"] = "VE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Vn"] = "VN";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Vg"] = "VG";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Vi"] = "VI";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Wf"] = "WF";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Eh"] = "EH";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Ye"] = "YE";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Zm"] = "ZM";
    CreatePayeesCsvRequestPaymentChannelCountryCodeEnum["Zw"] = "ZW";
})(CreatePayeesCsvRequestPaymentChannelCountryCodeEnum || (CreatePayeesCsvRequestPaymentChannelCountryCodeEnum = {}));
export var CreatePayeesCsvRequestPaymentChannelCurrencyEnum;
(function (CreatePayeesCsvRequestPaymentChannelCurrencyEnum) {
    CreatePayeesCsvRequestPaymentChannelCurrencyEnum["Usd"] = "USD";
    CreatePayeesCsvRequestPaymentChannelCurrencyEnum["Gbp"] = "GBP";
    CreatePayeesCsvRequestPaymentChannelCurrencyEnum["Eur"] = "EUR";
})(CreatePayeesCsvRequestPaymentChannelCurrencyEnum || (CreatePayeesCsvRequestPaymentChannelCurrencyEnum = {}));
var CreatePayeesCsvRequest = /** @class */ (function (_super) {
    __extends(CreatePayeesCsvRequest, _super);
    function CreatePayeesCsvRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressCity" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "addressCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressCountry" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "addressCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressCountyOrProvince" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "addressCountyOrProvince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine1" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "addressLine1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine2" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "addressLine2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine3" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "addressLine3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine4" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "addressLine4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressZipOrPostcode" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "addressZipOrPostcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challengeDescription" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "challengeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challengeValue" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "challengeValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyEIN" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "companyEin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyOperatingName" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "companyOperatingName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualDateOfBirth" }),
        __metadata("design:type", Date)
    ], CreatePayeesCsvRequest.prototype, "individualDateOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualFirstName" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "individualFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualLastName" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "individualLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualNationalIdentification" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "individualNationalIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualOtherNames" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "individualOtherNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualTitle" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "individualTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeLanguage" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "payeeLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelAccountName" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "paymentChannelAccountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelAccountNumber" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "paymentChannelAccountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelCountryCode" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "paymentChannelCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelCurrency" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "paymentChannelCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelIban" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "paymentChannelIban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelRoutingNumber" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "paymentChannelRoutingNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteId" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "remoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreatePayeesCsvRequest.prototype, "type", void 0);
    return CreatePayeesCsvRequest;
}(SpeakeasyBase));
export { CreatePayeesCsvRequest };
