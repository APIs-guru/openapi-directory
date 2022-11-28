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
export var CreatePaymentChannelCountryCodeEnum;
(function (CreatePaymentChannelCountryCodeEnum) {
    CreatePaymentChannelCountryCodeEnum["Af"] = "AF";
    CreatePaymentChannelCountryCodeEnum["Ax"] = "AX";
    CreatePaymentChannelCountryCodeEnum["Al"] = "AL";
    CreatePaymentChannelCountryCodeEnum["Dz"] = "DZ";
    CreatePaymentChannelCountryCodeEnum["As"] = "AS";
    CreatePaymentChannelCountryCodeEnum["Ad"] = "AD";
    CreatePaymentChannelCountryCodeEnum["Ao"] = "AO";
    CreatePaymentChannelCountryCodeEnum["Ai"] = "AI";
    CreatePaymentChannelCountryCodeEnum["Aq"] = "AQ";
    CreatePaymentChannelCountryCodeEnum["Ag"] = "AG";
    CreatePaymentChannelCountryCodeEnum["Ar"] = "AR";
    CreatePaymentChannelCountryCodeEnum["Am"] = "AM";
    CreatePaymentChannelCountryCodeEnum["Aw"] = "AW";
    CreatePaymentChannelCountryCodeEnum["Au"] = "AU";
    CreatePaymentChannelCountryCodeEnum["At"] = "AT";
    CreatePaymentChannelCountryCodeEnum["Az"] = "AZ";
    CreatePaymentChannelCountryCodeEnum["Bs"] = "BS";
    CreatePaymentChannelCountryCodeEnum["Bh"] = "BH";
    CreatePaymentChannelCountryCodeEnum["Bd"] = "BD";
    CreatePaymentChannelCountryCodeEnum["Bb"] = "BB";
    CreatePaymentChannelCountryCodeEnum["By"] = "BY";
    CreatePaymentChannelCountryCodeEnum["Be"] = "BE";
    CreatePaymentChannelCountryCodeEnum["Bz"] = "BZ";
    CreatePaymentChannelCountryCodeEnum["Bj"] = "BJ";
    CreatePaymentChannelCountryCodeEnum["Bm"] = "BM";
    CreatePaymentChannelCountryCodeEnum["Bt"] = "BT";
    CreatePaymentChannelCountryCodeEnum["Bo"] = "BO";
    CreatePaymentChannelCountryCodeEnum["Bq"] = "BQ";
    CreatePaymentChannelCountryCodeEnum["Ba"] = "BA";
    CreatePaymentChannelCountryCodeEnum["Bw"] = "BW";
    CreatePaymentChannelCountryCodeEnum["Bv"] = "BV";
    CreatePaymentChannelCountryCodeEnum["Br"] = "BR";
    CreatePaymentChannelCountryCodeEnum["Io"] = "IO";
    CreatePaymentChannelCountryCodeEnum["Bn"] = "BN";
    CreatePaymentChannelCountryCodeEnum["Bg"] = "BG";
    CreatePaymentChannelCountryCodeEnum["Bf"] = "BF";
    CreatePaymentChannelCountryCodeEnum["Bi"] = "BI";
    CreatePaymentChannelCountryCodeEnum["Kh"] = "KH";
    CreatePaymentChannelCountryCodeEnum["Cm"] = "CM";
    CreatePaymentChannelCountryCodeEnum["Ca"] = "CA";
    CreatePaymentChannelCountryCodeEnum["Cv"] = "CV";
    CreatePaymentChannelCountryCodeEnum["Ky"] = "KY";
    CreatePaymentChannelCountryCodeEnum["Cf"] = "CF";
    CreatePaymentChannelCountryCodeEnum["Td"] = "TD";
    CreatePaymentChannelCountryCodeEnum["Cl"] = "CL";
    CreatePaymentChannelCountryCodeEnum["Cn"] = "CN";
    CreatePaymentChannelCountryCodeEnum["Cx"] = "CX";
    CreatePaymentChannelCountryCodeEnum["Cc"] = "CC";
    CreatePaymentChannelCountryCodeEnum["Co"] = "CO";
    CreatePaymentChannelCountryCodeEnum["Km"] = "KM";
    CreatePaymentChannelCountryCodeEnum["Cg"] = "CG";
    CreatePaymentChannelCountryCodeEnum["Cd"] = "CD";
    CreatePaymentChannelCountryCodeEnum["Ck"] = "CK";
    CreatePaymentChannelCountryCodeEnum["Cr"] = "CR";
    CreatePaymentChannelCountryCodeEnum["Ci"] = "CI";
    CreatePaymentChannelCountryCodeEnum["Hr"] = "HR";
    CreatePaymentChannelCountryCodeEnum["Cu"] = "CU";
    CreatePaymentChannelCountryCodeEnum["Cw"] = "CW";
    CreatePaymentChannelCountryCodeEnum["Cy"] = "CY";
    CreatePaymentChannelCountryCodeEnum["Cz"] = "CZ";
    CreatePaymentChannelCountryCodeEnum["Dk"] = "DK";
    CreatePaymentChannelCountryCodeEnum["Dj"] = "DJ";
    CreatePaymentChannelCountryCodeEnum["Dm"] = "DM";
    CreatePaymentChannelCountryCodeEnum["Do"] = "DO";
    CreatePaymentChannelCountryCodeEnum["Ec"] = "EC";
    CreatePaymentChannelCountryCodeEnum["Eg"] = "EG";
    CreatePaymentChannelCountryCodeEnum["Sv"] = "SV";
    CreatePaymentChannelCountryCodeEnum["Gq"] = "GQ";
    CreatePaymentChannelCountryCodeEnum["Er"] = "ER";
    CreatePaymentChannelCountryCodeEnum["Ee"] = "EE";
    CreatePaymentChannelCountryCodeEnum["Et"] = "ET";
    CreatePaymentChannelCountryCodeEnum["Fk"] = "FK";
    CreatePaymentChannelCountryCodeEnum["Fo"] = "FO";
    CreatePaymentChannelCountryCodeEnum["Fj"] = "FJ";
    CreatePaymentChannelCountryCodeEnum["Fi"] = "FI";
    CreatePaymentChannelCountryCodeEnum["Fr"] = "FR";
    CreatePaymentChannelCountryCodeEnum["Gf"] = "GF";
    CreatePaymentChannelCountryCodeEnum["Pf"] = "PF";
    CreatePaymentChannelCountryCodeEnum["Tf"] = "TF";
    CreatePaymentChannelCountryCodeEnum["Ga"] = "GA";
    CreatePaymentChannelCountryCodeEnum["Gm"] = "GM";
    CreatePaymentChannelCountryCodeEnum["Ge"] = "GE";
    CreatePaymentChannelCountryCodeEnum["De"] = "DE";
    CreatePaymentChannelCountryCodeEnum["Gh"] = "GH";
    CreatePaymentChannelCountryCodeEnum["Gi"] = "GI";
    CreatePaymentChannelCountryCodeEnum["Gr"] = "GR";
    CreatePaymentChannelCountryCodeEnum["Gl"] = "GL";
    CreatePaymentChannelCountryCodeEnum["Gd"] = "GD";
    CreatePaymentChannelCountryCodeEnum["Gp"] = "GP";
    CreatePaymentChannelCountryCodeEnum["Gu"] = "GU";
    CreatePaymentChannelCountryCodeEnum["Gt"] = "GT";
    CreatePaymentChannelCountryCodeEnum["Gg"] = "GG";
    CreatePaymentChannelCountryCodeEnum["Gn"] = "GN";
    CreatePaymentChannelCountryCodeEnum["Gw"] = "GW";
    CreatePaymentChannelCountryCodeEnum["Gy"] = "GY";
    CreatePaymentChannelCountryCodeEnum["Ht"] = "HT";
    CreatePaymentChannelCountryCodeEnum["Hm"] = "HM";
    CreatePaymentChannelCountryCodeEnum["Va"] = "VA";
    CreatePaymentChannelCountryCodeEnum["Hn"] = "HN";
    CreatePaymentChannelCountryCodeEnum["Hk"] = "HK";
    CreatePaymentChannelCountryCodeEnum["Hu"] = "HU";
    CreatePaymentChannelCountryCodeEnum["Is"] = "IS";
    CreatePaymentChannelCountryCodeEnum["In"] = "IN";
    CreatePaymentChannelCountryCodeEnum["Id"] = "ID";
    CreatePaymentChannelCountryCodeEnum["Ir"] = "IR";
    CreatePaymentChannelCountryCodeEnum["Iq"] = "IQ";
    CreatePaymentChannelCountryCodeEnum["Ie"] = "IE";
    CreatePaymentChannelCountryCodeEnum["Im"] = "IM";
    CreatePaymentChannelCountryCodeEnum["Il"] = "IL";
    CreatePaymentChannelCountryCodeEnum["It"] = "IT";
    CreatePaymentChannelCountryCodeEnum["Jm"] = "JM";
    CreatePaymentChannelCountryCodeEnum["Jp"] = "JP";
    CreatePaymentChannelCountryCodeEnum["Je"] = "JE";
    CreatePaymentChannelCountryCodeEnum["Jo"] = "JO";
    CreatePaymentChannelCountryCodeEnum["Kz"] = "KZ";
    CreatePaymentChannelCountryCodeEnum["Ke"] = "KE";
    CreatePaymentChannelCountryCodeEnum["Ki"] = "KI";
    CreatePaymentChannelCountryCodeEnum["Kp"] = "KP";
    CreatePaymentChannelCountryCodeEnum["Kr"] = "KR";
    CreatePaymentChannelCountryCodeEnum["Kw"] = "KW";
    CreatePaymentChannelCountryCodeEnum["Kg"] = "KG";
    CreatePaymentChannelCountryCodeEnum["La"] = "LA";
    CreatePaymentChannelCountryCodeEnum["Lv"] = "LV";
    CreatePaymentChannelCountryCodeEnum["Lb"] = "LB";
    CreatePaymentChannelCountryCodeEnum["Ls"] = "LS";
    CreatePaymentChannelCountryCodeEnum["Lr"] = "LR";
    CreatePaymentChannelCountryCodeEnum["Ly"] = "LY";
    CreatePaymentChannelCountryCodeEnum["Li"] = "LI";
    CreatePaymentChannelCountryCodeEnum["Lt"] = "LT";
    CreatePaymentChannelCountryCodeEnum["Lu"] = "LU";
    CreatePaymentChannelCountryCodeEnum["Mo"] = "MO";
    CreatePaymentChannelCountryCodeEnum["Mk"] = "MK";
    CreatePaymentChannelCountryCodeEnum["Mg"] = "MG";
    CreatePaymentChannelCountryCodeEnum["Mw"] = "MW";
    CreatePaymentChannelCountryCodeEnum["My"] = "MY";
    CreatePaymentChannelCountryCodeEnum["Mv"] = "MV";
    CreatePaymentChannelCountryCodeEnum["Ml"] = "ML";
    CreatePaymentChannelCountryCodeEnum["Mt"] = "MT";
    CreatePaymentChannelCountryCodeEnum["Mh"] = "MH";
    CreatePaymentChannelCountryCodeEnum["Mq"] = "MQ";
    CreatePaymentChannelCountryCodeEnum["Mr"] = "MR";
    CreatePaymentChannelCountryCodeEnum["Mu"] = "MU";
    CreatePaymentChannelCountryCodeEnum["Yt"] = "YT";
    CreatePaymentChannelCountryCodeEnum["Mx"] = "MX";
    CreatePaymentChannelCountryCodeEnum["Fm"] = "FM";
    CreatePaymentChannelCountryCodeEnum["Md"] = "MD";
    CreatePaymentChannelCountryCodeEnum["Mc"] = "MC";
    CreatePaymentChannelCountryCodeEnum["Mn"] = "MN";
    CreatePaymentChannelCountryCodeEnum["Me"] = "ME";
    CreatePaymentChannelCountryCodeEnum["Ms"] = "MS";
    CreatePaymentChannelCountryCodeEnum["Ma"] = "MA";
    CreatePaymentChannelCountryCodeEnum["Mz"] = "MZ";
    CreatePaymentChannelCountryCodeEnum["Mm"] = "MM";
    CreatePaymentChannelCountryCodeEnum["Na"] = "NA";
    CreatePaymentChannelCountryCodeEnum["Nr"] = "NR";
    CreatePaymentChannelCountryCodeEnum["Np"] = "NP";
    CreatePaymentChannelCountryCodeEnum["Nl"] = "NL";
    CreatePaymentChannelCountryCodeEnum["Nc"] = "NC";
    CreatePaymentChannelCountryCodeEnum["Nz"] = "NZ";
    CreatePaymentChannelCountryCodeEnum["Ni"] = "NI";
    CreatePaymentChannelCountryCodeEnum["Ne"] = "NE";
    CreatePaymentChannelCountryCodeEnum["Ng"] = "NG";
    CreatePaymentChannelCountryCodeEnum["Nu"] = "NU";
    CreatePaymentChannelCountryCodeEnum["Nf"] = "NF";
    CreatePaymentChannelCountryCodeEnum["Mp"] = "MP";
    CreatePaymentChannelCountryCodeEnum["No"] = "NO";
    CreatePaymentChannelCountryCodeEnum["Om"] = "OM";
    CreatePaymentChannelCountryCodeEnum["Pk"] = "PK";
    CreatePaymentChannelCountryCodeEnum["Pw"] = "PW";
    CreatePaymentChannelCountryCodeEnum["Ps"] = "PS";
    CreatePaymentChannelCountryCodeEnum["Pa"] = "PA";
    CreatePaymentChannelCountryCodeEnum["Pg"] = "PG";
    CreatePaymentChannelCountryCodeEnum["Py"] = "PY";
    CreatePaymentChannelCountryCodeEnum["Pe"] = "PE";
    CreatePaymentChannelCountryCodeEnum["Ph"] = "PH";
    CreatePaymentChannelCountryCodeEnum["Pn"] = "PN";
    CreatePaymentChannelCountryCodeEnum["Pl"] = "PL";
    CreatePaymentChannelCountryCodeEnum["Pt"] = "PT";
    CreatePaymentChannelCountryCodeEnum["Pr"] = "PR";
    CreatePaymentChannelCountryCodeEnum["Qa"] = "QA";
    CreatePaymentChannelCountryCodeEnum["Re"] = "RE";
    CreatePaymentChannelCountryCodeEnum["Ro"] = "RO";
    CreatePaymentChannelCountryCodeEnum["Ru"] = "RU";
    CreatePaymentChannelCountryCodeEnum["Rw"] = "RW";
    CreatePaymentChannelCountryCodeEnum["Bl"] = "BL";
    CreatePaymentChannelCountryCodeEnum["Sh"] = "SH";
    CreatePaymentChannelCountryCodeEnum["Kn"] = "KN";
    CreatePaymentChannelCountryCodeEnum["Lc"] = "LC";
    CreatePaymentChannelCountryCodeEnum["Mf"] = "MF";
    CreatePaymentChannelCountryCodeEnum["Pm"] = "PM";
    CreatePaymentChannelCountryCodeEnum["Vc"] = "VC";
    CreatePaymentChannelCountryCodeEnum["Ws"] = "WS";
    CreatePaymentChannelCountryCodeEnum["Sm"] = "SM";
    CreatePaymentChannelCountryCodeEnum["St"] = "ST";
    CreatePaymentChannelCountryCodeEnum["Sa"] = "SA";
    CreatePaymentChannelCountryCodeEnum["Sn"] = "SN";
    CreatePaymentChannelCountryCodeEnum["Rs"] = "RS";
    CreatePaymentChannelCountryCodeEnum["Sc"] = "SC";
    CreatePaymentChannelCountryCodeEnum["Sl"] = "SL";
    CreatePaymentChannelCountryCodeEnum["Sg"] = "SG";
    CreatePaymentChannelCountryCodeEnum["Sx"] = "SX";
    CreatePaymentChannelCountryCodeEnum["Sk"] = "SK";
    CreatePaymentChannelCountryCodeEnum["Si"] = "SI";
    CreatePaymentChannelCountryCodeEnum["Sb"] = "SB";
    CreatePaymentChannelCountryCodeEnum["So"] = "SO";
    CreatePaymentChannelCountryCodeEnum["Za"] = "ZA";
    CreatePaymentChannelCountryCodeEnum["Gs"] = "GS";
    CreatePaymentChannelCountryCodeEnum["Ss"] = "SS";
    CreatePaymentChannelCountryCodeEnum["Es"] = "ES";
    CreatePaymentChannelCountryCodeEnum["Lk"] = "LK";
    CreatePaymentChannelCountryCodeEnum["Sd"] = "SD";
    CreatePaymentChannelCountryCodeEnum["Sr"] = "SR";
    CreatePaymentChannelCountryCodeEnum["Sj"] = "SJ";
    CreatePaymentChannelCountryCodeEnum["Sz"] = "SZ";
    CreatePaymentChannelCountryCodeEnum["Se"] = "SE";
    CreatePaymentChannelCountryCodeEnum["Ch"] = "CH";
    CreatePaymentChannelCountryCodeEnum["Sy"] = "SY";
    CreatePaymentChannelCountryCodeEnum["Tw"] = "TW";
    CreatePaymentChannelCountryCodeEnum["Tj"] = "TJ";
    CreatePaymentChannelCountryCodeEnum["Tz"] = "TZ";
    CreatePaymentChannelCountryCodeEnum["Th"] = "TH";
    CreatePaymentChannelCountryCodeEnum["Tl"] = "TL";
    CreatePaymentChannelCountryCodeEnum["Tg"] = "TG";
    CreatePaymentChannelCountryCodeEnum["Tk"] = "TK";
    CreatePaymentChannelCountryCodeEnum["To"] = "TO";
    CreatePaymentChannelCountryCodeEnum["Tt"] = "TT";
    CreatePaymentChannelCountryCodeEnum["Tn"] = "TN";
    CreatePaymentChannelCountryCodeEnum["Tr"] = "TR";
    CreatePaymentChannelCountryCodeEnum["Tm"] = "TM";
    CreatePaymentChannelCountryCodeEnum["Tc"] = "TC";
    CreatePaymentChannelCountryCodeEnum["Tv"] = "TV";
    CreatePaymentChannelCountryCodeEnum["Ug"] = "UG";
    CreatePaymentChannelCountryCodeEnum["Ua"] = "UA";
    CreatePaymentChannelCountryCodeEnum["Ae"] = "AE";
    CreatePaymentChannelCountryCodeEnum["Gb"] = "GB";
    CreatePaymentChannelCountryCodeEnum["Us"] = "US";
    CreatePaymentChannelCountryCodeEnum["Um"] = "UM";
    CreatePaymentChannelCountryCodeEnum["Uy"] = "UY";
    CreatePaymentChannelCountryCodeEnum["Uz"] = "UZ";
    CreatePaymentChannelCountryCodeEnum["Vu"] = "VU";
    CreatePaymentChannelCountryCodeEnum["Ve"] = "VE";
    CreatePaymentChannelCountryCodeEnum["Vn"] = "VN";
    CreatePaymentChannelCountryCodeEnum["Vg"] = "VG";
    CreatePaymentChannelCountryCodeEnum["Vi"] = "VI";
    CreatePaymentChannelCountryCodeEnum["Wf"] = "WF";
    CreatePaymentChannelCountryCodeEnum["Eh"] = "EH";
    CreatePaymentChannelCountryCodeEnum["Ye"] = "YE";
    CreatePaymentChannelCountryCodeEnum["Zm"] = "ZM";
    CreatePaymentChannelCountryCodeEnum["Zw"] = "ZW";
})(CreatePaymentChannelCountryCodeEnum || (CreatePaymentChannelCountryCodeEnum = {}));
export var CreatePaymentChannelCurrencyEnum;
(function (CreatePaymentChannelCurrencyEnum) {
    CreatePaymentChannelCurrencyEnum["Usd"] = "USD";
    CreatePaymentChannelCurrencyEnum["Gbp"] = "GBP";
    CreatePaymentChannelCurrencyEnum["Eur"] = "EUR";
})(CreatePaymentChannelCurrencyEnum || (CreatePaymentChannelCurrencyEnum = {}));
var CreatePaymentChannel = /** @class */ (function (_super) {
    __extends(CreatePaymentChannel, _super);
    function CreatePaymentChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel.prototype, "iban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelName" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel.prototype, "paymentChannelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingNumber" }),
        __metadata("design:type", String)
    ], CreatePaymentChannel.prototype, "routingNumber", void 0);
    return CreatePaymentChannel;
}(SpeakeasyBase));
export { CreatePaymentChannel };
