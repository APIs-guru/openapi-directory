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
export var CreatePaymentChannel2CountryCodeEnum;
(function (CreatePaymentChannel2CountryCodeEnum) {
    CreatePaymentChannel2CountryCodeEnum["Af"] = "AF";
    CreatePaymentChannel2CountryCodeEnum["Ax"] = "AX";
    CreatePaymentChannel2CountryCodeEnum["Al"] = "AL";
    CreatePaymentChannel2CountryCodeEnum["Dz"] = "DZ";
    CreatePaymentChannel2CountryCodeEnum["As"] = "AS";
    CreatePaymentChannel2CountryCodeEnum["Ad"] = "AD";
    CreatePaymentChannel2CountryCodeEnum["Ao"] = "AO";
    CreatePaymentChannel2CountryCodeEnum["Ai"] = "AI";
    CreatePaymentChannel2CountryCodeEnum["Aq"] = "AQ";
    CreatePaymentChannel2CountryCodeEnum["Ag"] = "AG";
    CreatePaymentChannel2CountryCodeEnum["Ar"] = "AR";
    CreatePaymentChannel2CountryCodeEnum["Am"] = "AM";
    CreatePaymentChannel2CountryCodeEnum["Aw"] = "AW";
    CreatePaymentChannel2CountryCodeEnum["Au"] = "AU";
    CreatePaymentChannel2CountryCodeEnum["At"] = "AT";
    CreatePaymentChannel2CountryCodeEnum["Az"] = "AZ";
    CreatePaymentChannel2CountryCodeEnum["Bs"] = "BS";
    CreatePaymentChannel2CountryCodeEnum["Bh"] = "BH";
    CreatePaymentChannel2CountryCodeEnum["Bd"] = "BD";
    CreatePaymentChannel2CountryCodeEnum["Bb"] = "BB";
    CreatePaymentChannel2CountryCodeEnum["By"] = "BY";
    CreatePaymentChannel2CountryCodeEnum["Be"] = "BE";
    CreatePaymentChannel2CountryCodeEnum["Bz"] = "BZ";
    CreatePaymentChannel2CountryCodeEnum["Bj"] = "BJ";
    CreatePaymentChannel2CountryCodeEnum["Bm"] = "BM";
    CreatePaymentChannel2CountryCodeEnum["Bt"] = "BT";
    CreatePaymentChannel2CountryCodeEnum["Bo"] = "BO";
    CreatePaymentChannel2CountryCodeEnum["Bq"] = "BQ";
    CreatePaymentChannel2CountryCodeEnum["Ba"] = "BA";
    CreatePaymentChannel2CountryCodeEnum["Bw"] = "BW";
    CreatePaymentChannel2CountryCodeEnum["Bv"] = "BV";
    CreatePaymentChannel2CountryCodeEnum["Br"] = "BR";
    CreatePaymentChannel2CountryCodeEnum["Io"] = "IO";
    CreatePaymentChannel2CountryCodeEnum["Bn"] = "BN";
    CreatePaymentChannel2CountryCodeEnum["Bg"] = "BG";
    CreatePaymentChannel2CountryCodeEnum["Bf"] = "BF";
    CreatePaymentChannel2CountryCodeEnum["Bi"] = "BI";
    CreatePaymentChannel2CountryCodeEnum["Kh"] = "KH";
    CreatePaymentChannel2CountryCodeEnum["Cm"] = "CM";
    CreatePaymentChannel2CountryCodeEnum["Ca"] = "CA";
    CreatePaymentChannel2CountryCodeEnum["Cv"] = "CV";
    CreatePaymentChannel2CountryCodeEnum["Ky"] = "KY";
    CreatePaymentChannel2CountryCodeEnum["Cf"] = "CF";
    CreatePaymentChannel2CountryCodeEnum["Td"] = "TD";
    CreatePaymentChannel2CountryCodeEnum["Cl"] = "CL";
    CreatePaymentChannel2CountryCodeEnum["Cn"] = "CN";
    CreatePaymentChannel2CountryCodeEnum["Cx"] = "CX";
    CreatePaymentChannel2CountryCodeEnum["Cc"] = "CC";
    CreatePaymentChannel2CountryCodeEnum["Co"] = "CO";
    CreatePaymentChannel2CountryCodeEnum["Km"] = "KM";
    CreatePaymentChannel2CountryCodeEnum["Cg"] = "CG";
    CreatePaymentChannel2CountryCodeEnum["Cd"] = "CD";
    CreatePaymentChannel2CountryCodeEnum["Ck"] = "CK";
    CreatePaymentChannel2CountryCodeEnum["Cr"] = "CR";
    CreatePaymentChannel2CountryCodeEnum["Ci"] = "CI";
    CreatePaymentChannel2CountryCodeEnum["Hr"] = "HR";
    CreatePaymentChannel2CountryCodeEnum["Cu"] = "CU";
    CreatePaymentChannel2CountryCodeEnum["Cw"] = "CW";
    CreatePaymentChannel2CountryCodeEnum["Cy"] = "CY";
    CreatePaymentChannel2CountryCodeEnum["Cz"] = "CZ";
    CreatePaymentChannel2CountryCodeEnum["Dk"] = "DK";
    CreatePaymentChannel2CountryCodeEnum["Dj"] = "DJ";
    CreatePaymentChannel2CountryCodeEnum["Dm"] = "DM";
    CreatePaymentChannel2CountryCodeEnum["Do"] = "DO";
    CreatePaymentChannel2CountryCodeEnum["Ec"] = "EC";
    CreatePaymentChannel2CountryCodeEnum["Eg"] = "EG";
    CreatePaymentChannel2CountryCodeEnum["Sv"] = "SV";
    CreatePaymentChannel2CountryCodeEnum["Gq"] = "GQ";
    CreatePaymentChannel2CountryCodeEnum["Er"] = "ER";
    CreatePaymentChannel2CountryCodeEnum["Ee"] = "EE";
    CreatePaymentChannel2CountryCodeEnum["Et"] = "ET";
    CreatePaymentChannel2CountryCodeEnum["Fk"] = "FK";
    CreatePaymentChannel2CountryCodeEnum["Fo"] = "FO";
    CreatePaymentChannel2CountryCodeEnum["Fj"] = "FJ";
    CreatePaymentChannel2CountryCodeEnum["Fi"] = "FI";
    CreatePaymentChannel2CountryCodeEnum["Fr"] = "FR";
    CreatePaymentChannel2CountryCodeEnum["Gf"] = "GF";
    CreatePaymentChannel2CountryCodeEnum["Pf"] = "PF";
    CreatePaymentChannel2CountryCodeEnum["Tf"] = "TF";
    CreatePaymentChannel2CountryCodeEnum["Ga"] = "GA";
    CreatePaymentChannel2CountryCodeEnum["Gm"] = "GM";
    CreatePaymentChannel2CountryCodeEnum["Ge"] = "GE";
    CreatePaymentChannel2CountryCodeEnum["De"] = "DE";
    CreatePaymentChannel2CountryCodeEnum["Gh"] = "GH";
    CreatePaymentChannel2CountryCodeEnum["Gi"] = "GI";
    CreatePaymentChannel2CountryCodeEnum["Gr"] = "GR";
    CreatePaymentChannel2CountryCodeEnum["Gl"] = "GL";
    CreatePaymentChannel2CountryCodeEnum["Gd"] = "GD";
    CreatePaymentChannel2CountryCodeEnum["Gp"] = "GP";
    CreatePaymentChannel2CountryCodeEnum["Gu"] = "GU";
    CreatePaymentChannel2CountryCodeEnum["Gt"] = "GT";
    CreatePaymentChannel2CountryCodeEnum["Gg"] = "GG";
    CreatePaymentChannel2CountryCodeEnum["Gn"] = "GN";
    CreatePaymentChannel2CountryCodeEnum["Gw"] = "GW";
    CreatePaymentChannel2CountryCodeEnum["Gy"] = "GY";
    CreatePaymentChannel2CountryCodeEnum["Ht"] = "HT";
    CreatePaymentChannel2CountryCodeEnum["Hm"] = "HM";
    CreatePaymentChannel2CountryCodeEnum["Va"] = "VA";
    CreatePaymentChannel2CountryCodeEnum["Hn"] = "HN";
    CreatePaymentChannel2CountryCodeEnum["Hk"] = "HK";
    CreatePaymentChannel2CountryCodeEnum["Hu"] = "HU";
    CreatePaymentChannel2CountryCodeEnum["Is"] = "IS";
    CreatePaymentChannel2CountryCodeEnum["In"] = "IN";
    CreatePaymentChannel2CountryCodeEnum["Id"] = "ID";
    CreatePaymentChannel2CountryCodeEnum["Ir"] = "IR";
    CreatePaymentChannel2CountryCodeEnum["Iq"] = "IQ";
    CreatePaymentChannel2CountryCodeEnum["Ie"] = "IE";
    CreatePaymentChannel2CountryCodeEnum["Im"] = "IM";
    CreatePaymentChannel2CountryCodeEnum["Il"] = "IL";
    CreatePaymentChannel2CountryCodeEnum["It"] = "IT";
    CreatePaymentChannel2CountryCodeEnum["Jm"] = "JM";
    CreatePaymentChannel2CountryCodeEnum["Jp"] = "JP";
    CreatePaymentChannel2CountryCodeEnum["Je"] = "JE";
    CreatePaymentChannel2CountryCodeEnum["Jo"] = "JO";
    CreatePaymentChannel2CountryCodeEnum["Kz"] = "KZ";
    CreatePaymentChannel2CountryCodeEnum["Ke"] = "KE";
    CreatePaymentChannel2CountryCodeEnum["Ki"] = "KI";
    CreatePaymentChannel2CountryCodeEnum["Kp"] = "KP";
    CreatePaymentChannel2CountryCodeEnum["Kr"] = "KR";
    CreatePaymentChannel2CountryCodeEnum["Kw"] = "KW";
    CreatePaymentChannel2CountryCodeEnum["Kg"] = "KG";
    CreatePaymentChannel2CountryCodeEnum["La"] = "LA";
    CreatePaymentChannel2CountryCodeEnum["Lv"] = "LV";
    CreatePaymentChannel2CountryCodeEnum["Lb"] = "LB";
    CreatePaymentChannel2CountryCodeEnum["Ls"] = "LS";
    CreatePaymentChannel2CountryCodeEnum["Lr"] = "LR";
    CreatePaymentChannel2CountryCodeEnum["Ly"] = "LY";
    CreatePaymentChannel2CountryCodeEnum["Li"] = "LI";
    CreatePaymentChannel2CountryCodeEnum["Lt"] = "LT";
    CreatePaymentChannel2CountryCodeEnum["Lu"] = "LU";
    CreatePaymentChannel2CountryCodeEnum["Mo"] = "MO";
    CreatePaymentChannel2CountryCodeEnum["Mk"] = "MK";
    CreatePaymentChannel2CountryCodeEnum["Mg"] = "MG";
    CreatePaymentChannel2CountryCodeEnum["Mw"] = "MW";
    CreatePaymentChannel2CountryCodeEnum["My"] = "MY";
    CreatePaymentChannel2CountryCodeEnum["Mv"] = "MV";
    CreatePaymentChannel2CountryCodeEnum["Ml"] = "ML";
    CreatePaymentChannel2CountryCodeEnum["Mt"] = "MT";
    CreatePaymentChannel2CountryCodeEnum["Mh"] = "MH";
    CreatePaymentChannel2CountryCodeEnum["Mq"] = "MQ";
    CreatePaymentChannel2CountryCodeEnum["Mr"] = "MR";
    CreatePaymentChannel2CountryCodeEnum["Mu"] = "MU";
    CreatePaymentChannel2CountryCodeEnum["Yt"] = "YT";
    CreatePaymentChannel2CountryCodeEnum["Mx"] = "MX";
    CreatePaymentChannel2CountryCodeEnum["Fm"] = "FM";
    CreatePaymentChannel2CountryCodeEnum["Md"] = "MD";
    CreatePaymentChannel2CountryCodeEnum["Mc"] = "MC";
    CreatePaymentChannel2CountryCodeEnum["Mn"] = "MN";
    CreatePaymentChannel2CountryCodeEnum["Me"] = "ME";
    CreatePaymentChannel2CountryCodeEnum["Ms"] = "MS";
    CreatePaymentChannel2CountryCodeEnum["Ma"] = "MA";
    CreatePaymentChannel2CountryCodeEnum["Mz"] = "MZ";
    CreatePaymentChannel2CountryCodeEnum["Mm"] = "MM";
    CreatePaymentChannel2CountryCodeEnum["Na"] = "NA";
    CreatePaymentChannel2CountryCodeEnum["Nr"] = "NR";
    CreatePaymentChannel2CountryCodeEnum["Np"] = "NP";
    CreatePaymentChannel2CountryCodeEnum["Nl"] = "NL";
    CreatePaymentChannel2CountryCodeEnum["Nc"] = "NC";
    CreatePaymentChannel2CountryCodeEnum["Nz"] = "NZ";
    CreatePaymentChannel2CountryCodeEnum["Ni"] = "NI";
    CreatePaymentChannel2CountryCodeEnum["Ne"] = "NE";
    CreatePaymentChannel2CountryCodeEnum["Ng"] = "NG";
    CreatePaymentChannel2CountryCodeEnum["Nu"] = "NU";
    CreatePaymentChannel2CountryCodeEnum["Nf"] = "NF";
    CreatePaymentChannel2CountryCodeEnum["Mp"] = "MP";
    CreatePaymentChannel2CountryCodeEnum["No"] = "NO";
    CreatePaymentChannel2CountryCodeEnum["Om"] = "OM";
    CreatePaymentChannel2CountryCodeEnum["Pk"] = "PK";
    CreatePaymentChannel2CountryCodeEnum["Pw"] = "PW";
    CreatePaymentChannel2CountryCodeEnum["Ps"] = "PS";
    CreatePaymentChannel2CountryCodeEnum["Pa"] = "PA";
    CreatePaymentChannel2CountryCodeEnum["Pg"] = "PG";
    CreatePaymentChannel2CountryCodeEnum["Py"] = "PY";
    CreatePaymentChannel2CountryCodeEnum["Pe"] = "PE";
    CreatePaymentChannel2CountryCodeEnum["Ph"] = "PH";
    CreatePaymentChannel2CountryCodeEnum["Pn"] = "PN";
    CreatePaymentChannel2CountryCodeEnum["Pl"] = "PL";
    CreatePaymentChannel2CountryCodeEnum["Pt"] = "PT";
    CreatePaymentChannel2CountryCodeEnum["Pr"] = "PR";
    CreatePaymentChannel2CountryCodeEnum["Qa"] = "QA";
    CreatePaymentChannel2CountryCodeEnum["Re"] = "RE";
    CreatePaymentChannel2CountryCodeEnum["Ro"] = "RO";
    CreatePaymentChannel2CountryCodeEnum["Ru"] = "RU";
    CreatePaymentChannel2CountryCodeEnum["Rw"] = "RW";
    CreatePaymentChannel2CountryCodeEnum["Bl"] = "BL";
    CreatePaymentChannel2CountryCodeEnum["Sh"] = "SH";
    CreatePaymentChannel2CountryCodeEnum["Kn"] = "KN";
    CreatePaymentChannel2CountryCodeEnum["Lc"] = "LC";
    CreatePaymentChannel2CountryCodeEnum["Mf"] = "MF";
    CreatePaymentChannel2CountryCodeEnum["Pm"] = "PM";
    CreatePaymentChannel2CountryCodeEnum["Vc"] = "VC";
    CreatePaymentChannel2CountryCodeEnum["Ws"] = "WS";
    CreatePaymentChannel2CountryCodeEnum["Sm"] = "SM";
    CreatePaymentChannel2CountryCodeEnum["St"] = "ST";
    CreatePaymentChannel2CountryCodeEnum["Sa"] = "SA";
    CreatePaymentChannel2CountryCodeEnum["Sn"] = "SN";
    CreatePaymentChannel2CountryCodeEnum["Rs"] = "RS";
    CreatePaymentChannel2CountryCodeEnum["Sc"] = "SC";
    CreatePaymentChannel2CountryCodeEnum["Sl"] = "SL";
    CreatePaymentChannel2CountryCodeEnum["Sg"] = "SG";
    CreatePaymentChannel2CountryCodeEnum["Sx"] = "SX";
    CreatePaymentChannel2CountryCodeEnum["Sk"] = "SK";
    CreatePaymentChannel2CountryCodeEnum["Si"] = "SI";
    CreatePaymentChannel2CountryCodeEnum["Sb"] = "SB";
    CreatePaymentChannel2CountryCodeEnum["So"] = "SO";
    CreatePaymentChannel2CountryCodeEnum["Za"] = "ZA";
    CreatePaymentChannel2CountryCodeEnum["Gs"] = "GS";
    CreatePaymentChannel2CountryCodeEnum["Ss"] = "SS";
    CreatePaymentChannel2CountryCodeEnum["Es"] = "ES";
    CreatePaymentChannel2CountryCodeEnum["Lk"] = "LK";
    CreatePaymentChannel2CountryCodeEnum["Sd"] = "SD";
    CreatePaymentChannel2CountryCodeEnum["Sr"] = "SR";
    CreatePaymentChannel2CountryCodeEnum["Sj"] = "SJ";
    CreatePaymentChannel2CountryCodeEnum["Sz"] = "SZ";
    CreatePaymentChannel2CountryCodeEnum["Se"] = "SE";
    CreatePaymentChannel2CountryCodeEnum["Ch"] = "CH";
    CreatePaymentChannel2CountryCodeEnum["Sy"] = "SY";
    CreatePaymentChannel2CountryCodeEnum["Tw"] = "TW";
    CreatePaymentChannel2CountryCodeEnum["Tj"] = "TJ";
    CreatePaymentChannel2CountryCodeEnum["Tz"] = "TZ";
    CreatePaymentChannel2CountryCodeEnum["Th"] = "TH";
    CreatePaymentChannel2CountryCodeEnum["Tl"] = "TL";
    CreatePaymentChannel2CountryCodeEnum["Tg"] = "TG";
    CreatePaymentChannel2CountryCodeEnum["Tk"] = "TK";
    CreatePaymentChannel2CountryCodeEnum["To"] = "TO";
    CreatePaymentChannel2CountryCodeEnum["Tt"] = "TT";
    CreatePaymentChannel2CountryCodeEnum["Tn"] = "TN";
    CreatePaymentChannel2CountryCodeEnum["Tr"] = "TR";
    CreatePaymentChannel2CountryCodeEnum["Tm"] = "TM";
    CreatePaymentChannel2CountryCodeEnum["Tc"] = "TC";
    CreatePaymentChannel2CountryCodeEnum["Tv"] = "TV";
    CreatePaymentChannel2CountryCodeEnum["Ug"] = "UG";
    CreatePaymentChannel2CountryCodeEnum["Ua"] = "UA";
    CreatePaymentChannel2CountryCodeEnum["Ae"] = "AE";
    CreatePaymentChannel2CountryCodeEnum["Gb"] = "GB";
    CreatePaymentChannel2CountryCodeEnum["Us"] = "US";
    CreatePaymentChannel2CountryCodeEnum["Um"] = "UM";
    CreatePaymentChannel2CountryCodeEnum["Uy"] = "UY";
    CreatePaymentChannel2CountryCodeEnum["Uz"] = "UZ";
    CreatePaymentChannel2CountryCodeEnum["Vu"] = "VU";
    CreatePaymentChannel2CountryCodeEnum["Ve"] = "VE";
    CreatePaymentChannel2CountryCodeEnum["Vn"] = "VN";
    CreatePaymentChannel2CountryCodeEnum["Vg"] = "VG";
    CreatePaymentChannel2CountryCodeEnum["Vi"] = "VI";
    CreatePaymentChannel2CountryCodeEnum["Wf"] = "WF";
    CreatePaymentChannel2CountryCodeEnum["Eh"] = "EH";
    CreatePaymentChannel2CountryCodeEnum["Ye"] = "YE";
    CreatePaymentChannel2CountryCodeEnum["Zm"] = "ZM";
    CreatePaymentChannel2CountryCodeEnum["Zw"] = "ZW";
})(CreatePaymentChannel2CountryCodeEnum || (CreatePaymentChannel2CountryCodeEnum = {}));
export var CreatePaymentChannel2CurrencyEnum;
(function (CreatePaymentChannel2CurrencyEnum) {
    CreatePaymentChannel2CurrencyEnum["Usd"] = "USD";
    CreatePaymentChannel2CurrencyEnum["Gbp"] = "GBP";
    CreatePaymentChannel2CurrencyEnum["Eur"] = "EUR";
})(CreatePaymentChannel2CurrencyEnum || (CreatePaymentChannel2CurrencyEnum = {}));
var CreatePaymentChannel2 = /** @class */ (function (_super) {
    __extends(CreatePaymentChannel2, _super);
    function CreatePaymentChannel2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel2.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel2.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel2.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel2.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel2.prototype, "iban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelName" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel2.prototype, "paymentChannelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingNumber" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel2.prototype, "routingNumber", void 0);
    return CreatePaymentChannel2;
}(SpeakeasyBase));
export { CreatePaymentChannel2 };
