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
import * as shared from "../shared";
var PutShopRequestBodyAddress = /** @class */ (function (_super) {
    __extends(PutShopRequestBodyAddress, _super);
    function PutShopRequestBodyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], PutShopRequestBodyAddress.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extended_address" }),
        __metadata("design:type", String)
    ], PutShopRequestBodyAddress.prototype, "extendedAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locality" }),
        __metadata("design:type", String)
    ], PutShopRequestBodyAddress.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutShopRequestBodyAddress.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], PutShopRequestBodyAddress.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], PutShopRequestBodyAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], PutShopRequestBodyAddress.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_address" }),
        __metadata("design:type", String)
    ], PutShopRequestBodyAddress.prototype, "streetAddress", void 0);
    return PutShopRequestBodyAddress;
}(SpeakeasyBase));
export { PutShopRequestBodyAddress };
export var PutShopRequestBodyCurrencyEnum;
(function (PutShopRequestBodyCurrencyEnum) {
    PutShopRequestBodyCurrencyEnum["Usd"] = "USD";
    PutShopRequestBodyCurrencyEnum["Cad"] = "CAD";
    PutShopRequestBodyCurrencyEnum["Eur"] = "EUR";
    PutShopRequestBodyCurrencyEnum["Gbp"] = "GBP";
    PutShopRequestBodyCurrencyEnum["Aud"] = "AUD";
    PutShopRequestBodyCurrencyEnum["Jpy"] = "JPY";
    PutShopRequestBodyCurrencyEnum["Nzd"] = "NZD";
    PutShopRequestBodyCurrencyEnum["Mxn"] = "MXN";
})(PutShopRequestBodyCurrencyEnum || (PutShopRequestBodyCurrencyEnum = {}));
export var PutShopRequestBodyLegalCountryCodeEnum;
(function (PutShopRequestBodyLegalCountryCodeEnum) {
    PutShopRequestBodyLegalCountryCodeEnum["Ad"] = "AD";
    PutShopRequestBodyLegalCountryCodeEnum["Ae"] = "AE";
    PutShopRequestBodyLegalCountryCodeEnum["Af"] = "AF";
    PutShopRequestBodyLegalCountryCodeEnum["Ag"] = "AG";
    PutShopRequestBodyLegalCountryCodeEnum["Ai"] = "AI";
    PutShopRequestBodyLegalCountryCodeEnum["Al"] = "AL";
    PutShopRequestBodyLegalCountryCodeEnum["Am"] = "AM";
    PutShopRequestBodyLegalCountryCodeEnum["Ao"] = "AO";
    PutShopRequestBodyLegalCountryCodeEnum["Ar"] = "AR";
    PutShopRequestBodyLegalCountryCodeEnum["As"] = "AS";
    PutShopRequestBodyLegalCountryCodeEnum["At"] = "AT";
    PutShopRequestBodyLegalCountryCodeEnum["Au"] = "AU";
    PutShopRequestBodyLegalCountryCodeEnum["Aw"] = "AW";
    PutShopRequestBodyLegalCountryCodeEnum["Ax"] = "AX";
    PutShopRequestBodyLegalCountryCodeEnum["Az"] = "AZ";
    PutShopRequestBodyLegalCountryCodeEnum["Ba"] = "BA";
    PutShopRequestBodyLegalCountryCodeEnum["Bb"] = "BB";
    PutShopRequestBodyLegalCountryCodeEnum["Bd"] = "BD";
    PutShopRequestBodyLegalCountryCodeEnum["Be"] = "BE";
    PutShopRequestBodyLegalCountryCodeEnum["Bf"] = "BF";
    PutShopRequestBodyLegalCountryCodeEnum["Bg"] = "BG";
    PutShopRequestBodyLegalCountryCodeEnum["Bh"] = "BH";
    PutShopRequestBodyLegalCountryCodeEnum["Bi"] = "BI";
    PutShopRequestBodyLegalCountryCodeEnum["Bj"] = "BJ";
    PutShopRequestBodyLegalCountryCodeEnum["Bl"] = "BL";
    PutShopRequestBodyLegalCountryCodeEnum["Bm"] = "BM";
    PutShopRequestBodyLegalCountryCodeEnum["Bn"] = "BN";
    PutShopRequestBodyLegalCountryCodeEnum["Bo"] = "BO";
    PutShopRequestBodyLegalCountryCodeEnum["Bq"] = "BQ";
    PutShopRequestBodyLegalCountryCodeEnum["Br"] = "BR";
    PutShopRequestBodyLegalCountryCodeEnum["Bs"] = "BS";
    PutShopRequestBodyLegalCountryCodeEnum["Bt"] = "BT";
    PutShopRequestBodyLegalCountryCodeEnum["Bv"] = "BV";
    PutShopRequestBodyLegalCountryCodeEnum["Bw"] = "BW";
    PutShopRequestBodyLegalCountryCodeEnum["By"] = "BY";
    PutShopRequestBodyLegalCountryCodeEnum["Bz"] = "BZ";
    PutShopRequestBodyLegalCountryCodeEnum["Ca"] = "CA";
    PutShopRequestBodyLegalCountryCodeEnum["Cc"] = "CC";
    PutShopRequestBodyLegalCountryCodeEnum["Cd"] = "CD";
    PutShopRequestBodyLegalCountryCodeEnum["Cf"] = "CF";
    PutShopRequestBodyLegalCountryCodeEnum["Cg"] = "CG";
    PutShopRequestBodyLegalCountryCodeEnum["Ch"] = "CH";
    PutShopRequestBodyLegalCountryCodeEnum["Ci"] = "CI";
    PutShopRequestBodyLegalCountryCodeEnum["Ck"] = "CK";
    PutShopRequestBodyLegalCountryCodeEnum["Cl"] = "CL";
    PutShopRequestBodyLegalCountryCodeEnum["Cm"] = "CM";
    PutShopRequestBodyLegalCountryCodeEnum["Cn"] = "CN";
    PutShopRequestBodyLegalCountryCodeEnum["Co"] = "CO";
    PutShopRequestBodyLegalCountryCodeEnum["Cr"] = "CR";
    PutShopRequestBodyLegalCountryCodeEnum["Cv"] = "CV";
    PutShopRequestBodyLegalCountryCodeEnum["Cw"] = "CW";
    PutShopRequestBodyLegalCountryCodeEnum["Cx"] = "CX";
    PutShopRequestBodyLegalCountryCodeEnum["Cy"] = "CY";
    PutShopRequestBodyLegalCountryCodeEnum["Cz"] = "CZ";
    PutShopRequestBodyLegalCountryCodeEnum["De"] = "DE";
    PutShopRequestBodyLegalCountryCodeEnum["Dj"] = "DJ";
    PutShopRequestBodyLegalCountryCodeEnum["Dk"] = "DK";
    PutShopRequestBodyLegalCountryCodeEnum["Dm"] = "DM";
    PutShopRequestBodyLegalCountryCodeEnum["Do"] = "DO";
    PutShopRequestBodyLegalCountryCodeEnum["Dz"] = "DZ";
    PutShopRequestBodyLegalCountryCodeEnum["Ec"] = "EC";
    PutShopRequestBodyLegalCountryCodeEnum["Ee"] = "EE";
    PutShopRequestBodyLegalCountryCodeEnum["Eg"] = "EG";
    PutShopRequestBodyLegalCountryCodeEnum["Eh"] = "EH";
    PutShopRequestBodyLegalCountryCodeEnum["Er"] = "ER";
    PutShopRequestBodyLegalCountryCodeEnum["Es"] = "ES";
    PutShopRequestBodyLegalCountryCodeEnum["Et"] = "ET";
    PutShopRequestBodyLegalCountryCodeEnum["Fi"] = "FI";
    PutShopRequestBodyLegalCountryCodeEnum["Fj"] = "FJ";
    PutShopRequestBodyLegalCountryCodeEnum["Fk"] = "FK";
    PutShopRequestBodyLegalCountryCodeEnum["Fm"] = "FM";
    PutShopRequestBodyLegalCountryCodeEnum["Fo"] = "FO";
    PutShopRequestBodyLegalCountryCodeEnum["Fr"] = "FR";
    PutShopRequestBodyLegalCountryCodeEnum["Ga"] = "GA";
    PutShopRequestBodyLegalCountryCodeEnum["Gb"] = "GB";
    PutShopRequestBodyLegalCountryCodeEnum["Gd"] = "GD";
    PutShopRequestBodyLegalCountryCodeEnum["Ge"] = "GE";
    PutShopRequestBodyLegalCountryCodeEnum["Gf"] = "GF";
    PutShopRequestBodyLegalCountryCodeEnum["Gg"] = "GG";
    PutShopRequestBodyLegalCountryCodeEnum["Gh"] = "GH";
    PutShopRequestBodyLegalCountryCodeEnum["Gi"] = "GI";
    PutShopRequestBodyLegalCountryCodeEnum["Gl"] = "GL";
    PutShopRequestBodyLegalCountryCodeEnum["Gm"] = "GM";
    PutShopRequestBodyLegalCountryCodeEnum["Gn"] = "GN";
    PutShopRequestBodyLegalCountryCodeEnum["Gp"] = "GP";
    PutShopRequestBodyLegalCountryCodeEnum["Gq"] = "GQ";
    PutShopRequestBodyLegalCountryCodeEnum["Gr"] = "GR";
    PutShopRequestBodyLegalCountryCodeEnum["Gs"] = "GS";
    PutShopRequestBodyLegalCountryCodeEnum["Gt"] = "GT";
    PutShopRequestBodyLegalCountryCodeEnum["Gu"] = "GU";
    PutShopRequestBodyLegalCountryCodeEnum["Gw"] = "GW";
    PutShopRequestBodyLegalCountryCodeEnum["Gy"] = "GY";
    PutShopRequestBodyLegalCountryCodeEnum["Hk"] = "HK";
    PutShopRequestBodyLegalCountryCodeEnum["Hm"] = "HM";
    PutShopRequestBodyLegalCountryCodeEnum["Hn"] = "HN";
    PutShopRequestBodyLegalCountryCodeEnum["Hr"] = "HR";
    PutShopRequestBodyLegalCountryCodeEnum["Ht"] = "HT";
    PutShopRequestBodyLegalCountryCodeEnum["Hu"] = "HU";
    PutShopRequestBodyLegalCountryCodeEnum["Id"] = "ID";
    PutShopRequestBodyLegalCountryCodeEnum["Ie"] = "IE";
    PutShopRequestBodyLegalCountryCodeEnum["Il"] = "IL";
    PutShopRequestBodyLegalCountryCodeEnum["Im"] = "IM";
    PutShopRequestBodyLegalCountryCodeEnum["In"] = "IN";
    PutShopRequestBodyLegalCountryCodeEnum["Io"] = "IO";
    PutShopRequestBodyLegalCountryCodeEnum["Iq"] = "IQ";
    PutShopRequestBodyLegalCountryCodeEnum["Is"] = "IS";
    PutShopRequestBodyLegalCountryCodeEnum["It"] = "IT";
    PutShopRequestBodyLegalCountryCodeEnum["Je"] = "JE";
    PutShopRequestBodyLegalCountryCodeEnum["Jm"] = "JM";
    PutShopRequestBodyLegalCountryCodeEnum["Jo"] = "JO";
    PutShopRequestBodyLegalCountryCodeEnum["Jp"] = "JP";
    PutShopRequestBodyLegalCountryCodeEnum["Ke"] = "KE";
    PutShopRequestBodyLegalCountryCodeEnum["Kg"] = "KG";
    PutShopRequestBodyLegalCountryCodeEnum["Kh"] = "KH";
    PutShopRequestBodyLegalCountryCodeEnum["Ki"] = "KI";
    PutShopRequestBodyLegalCountryCodeEnum["Km"] = "KM";
    PutShopRequestBodyLegalCountryCodeEnum["Kn"] = "KN";
    PutShopRequestBodyLegalCountryCodeEnum["Kr"] = "KR";
    PutShopRequestBodyLegalCountryCodeEnum["Kw"] = "KW";
    PutShopRequestBodyLegalCountryCodeEnum["Ky"] = "KY";
    PutShopRequestBodyLegalCountryCodeEnum["Kz"] = "KZ";
    PutShopRequestBodyLegalCountryCodeEnum["La"] = "LA";
    PutShopRequestBodyLegalCountryCodeEnum["Lb"] = "LB";
    PutShopRequestBodyLegalCountryCodeEnum["Lc"] = "LC";
    PutShopRequestBodyLegalCountryCodeEnum["Li"] = "LI";
    PutShopRequestBodyLegalCountryCodeEnum["Lk"] = "LK";
    PutShopRequestBodyLegalCountryCodeEnum["Lr"] = "LR";
    PutShopRequestBodyLegalCountryCodeEnum["Ls"] = "LS";
    PutShopRequestBodyLegalCountryCodeEnum["Lt"] = "LT";
    PutShopRequestBodyLegalCountryCodeEnum["Lu"] = "LU";
    PutShopRequestBodyLegalCountryCodeEnum["Lv"] = "LV";
    PutShopRequestBodyLegalCountryCodeEnum["Ly"] = "LY";
    PutShopRequestBodyLegalCountryCodeEnum["Ma"] = "MA";
    PutShopRequestBodyLegalCountryCodeEnum["Mc"] = "MC";
    PutShopRequestBodyLegalCountryCodeEnum["Md"] = "MD";
    PutShopRequestBodyLegalCountryCodeEnum["Me"] = "ME";
    PutShopRequestBodyLegalCountryCodeEnum["Mf"] = "MF";
    PutShopRequestBodyLegalCountryCodeEnum["Mg"] = "MG";
    PutShopRequestBodyLegalCountryCodeEnum["Mh"] = "MH";
    PutShopRequestBodyLegalCountryCodeEnum["Mk"] = "MK";
    PutShopRequestBodyLegalCountryCodeEnum["Ml"] = "ML";
    PutShopRequestBodyLegalCountryCodeEnum["Mm"] = "MM";
    PutShopRequestBodyLegalCountryCodeEnum["Mn"] = "MN";
    PutShopRequestBodyLegalCountryCodeEnum["Mo"] = "MO";
    PutShopRequestBodyLegalCountryCodeEnum["Mp"] = "MP";
    PutShopRequestBodyLegalCountryCodeEnum["Mq"] = "MQ";
    PutShopRequestBodyLegalCountryCodeEnum["Mr"] = "MR";
    PutShopRequestBodyLegalCountryCodeEnum["Ms"] = "MS";
    PutShopRequestBodyLegalCountryCodeEnum["Mt"] = "MT";
    PutShopRequestBodyLegalCountryCodeEnum["Mu"] = "MU";
    PutShopRequestBodyLegalCountryCodeEnum["Mv"] = "MV";
    PutShopRequestBodyLegalCountryCodeEnum["Mw"] = "MW";
    PutShopRequestBodyLegalCountryCodeEnum["Mx"] = "MX";
    PutShopRequestBodyLegalCountryCodeEnum["My"] = "MY";
    PutShopRequestBodyLegalCountryCodeEnum["Mz"] = "MZ";
    PutShopRequestBodyLegalCountryCodeEnum["Na"] = "NA";
    PutShopRequestBodyLegalCountryCodeEnum["Nc"] = "NC";
    PutShopRequestBodyLegalCountryCodeEnum["Ne"] = "NE";
    PutShopRequestBodyLegalCountryCodeEnum["Nf"] = "NF";
    PutShopRequestBodyLegalCountryCodeEnum["Ng"] = "NG";
    PutShopRequestBodyLegalCountryCodeEnum["Ni"] = "NI";
    PutShopRequestBodyLegalCountryCodeEnum["Nl"] = "NL";
    PutShopRequestBodyLegalCountryCodeEnum["No"] = "NO";
    PutShopRequestBodyLegalCountryCodeEnum["Np"] = "NP";
    PutShopRequestBodyLegalCountryCodeEnum["Nr"] = "NR";
    PutShopRequestBodyLegalCountryCodeEnum["Nu"] = "NU";
    PutShopRequestBodyLegalCountryCodeEnum["Nz"] = "NZ";
    PutShopRequestBodyLegalCountryCodeEnum["Om"] = "OM";
    PutShopRequestBodyLegalCountryCodeEnum["Pa"] = "PA";
    PutShopRequestBodyLegalCountryCodeEnum["Pe"] = "PE";
    PutShopRequestBodyLegalCountryCodeEnum["Pf"] = "PF";
    PutShopRequestBodyLegalCountryCodeEnum["Pg"] = "PG";
    PutShopRequestBodyLegalCountryCodeEnum["Ph"] = "PH";
    PutShopRequestBodyLegalCountryCodeEnum["Pk"] = "PK";
    PutShopRequestBodyLegalCountryCodeEnum["Pl"] = "PL";
    PutShopRequestBodyLegalCountryCodeEnum["Pm"] = "PM";
    PutShopRequestBodyLegalCountryCodeEnum["Pn"] = "PN";
    PutShopRequestBodyLegalCountryCodeEnum["Ps"] = "PS";
    PutShopRequestBodyLegalCountryCodeEnum["Pt"] = "PT";
    PutShopRequestBodyLegalCountryCodeEnum["Pw"] = "PW";
    PutShopRequestBodyLegalCountryCodeEnum["Py"] = "PY";
    PutShopRequestBodyLegalCountryCodeEnum["Qa"] = "QA";
    PutShopRequestBodyLegalCountryCodeEnum["Re"] = "RE";
    PutShopRequestBodyLegalCountryCodeEnum["Ro"] = "RO";
    PutShopRequestBodyLegalCountryCodeEnum["Rs"] = "RS";
    PutShopRequestBodyLegalCountryCodeEnum["Ru"] = "RU";
    PutShopRequestBodyLegalCountryCodeEnum["Rw"] = "RW";
    PutShopRequestBodyLegalCountryCodeEnum["Sa"] = "SA";
    PutShopRequestBodyLegalCountryCodeEnum["Sb"] = "SB";
    PutShopRequestBodyLegalCountryCodeEnum["Sc"] = "SC";
    PutShopRequestBodyLegalCountryCodeEnum["Se"] = "SE";
    PutShopRequestBodyLegalCountryCodeEnum["Sg"] = "SG";
    PutShopRequestBodyLegalCountryCodeEnum["Sh"] = "SH";
    PutShopRequestBodyLegalCountryCodeEnum["Si"] = "SI";
    PutShopRequestBodyLegalCountryCodeEnum["Sj"] = "SJ";
    PutShopRequestBodyLegalCountryCodeEnum["Sk"] = "SK";
    PutShopRequestBodyLegalCountryCodeEnum["Sl"] = "SL";
    PutShopRequestBodyLegalCountryCodeEnum["Sm"] = "SM";
    PutShopRequestBodyLegalCountryCodeEnum["Sn"] = "SN";
    PutShopRequestBodyLegalCountryCodeEnum["So"] = "SO";
    PutShopRequestBodyLegalCountryCodeEnum["Sr"] = "SR";
    PutShopRequestBodyLegalCountryCodeEnum["Ss"] = "SS";
    PutShopRequestBodyLegalCountryCodeEnum["St"] = "ST";
    PutShopRequestBodyLegalCountryCodeEnum["Sv"] = "SV";
    PutShopRequestBodyLegalCountryCodeEnum["Sx"] = "SX";
    PutShopRequestBodyLegalCountryCodeEnum["Sz"] = "SZ";
    PutShopRequestBodyLegalCountryCodeEnum["Tc"] = "TC";
    PutShopRequestBodyLegalCountryCodeEnum["Td"] = "TD";
    PutShopRequestBodyLegalCountryCodeEnum["Tf"] = "TF";
    PutShopRequestBodyLegalCountryCodeEnum["Tg"] = "TG";
    PutShopRequestBodyLegalCountryCodeEnum["Th"] = "TH";
    PutShopRequestBodyLegalCountryCodeEnum["Tj"] = "TJ";
    PutShopRequestBodyLegalCountryCodeEnum["Tk"] = "TK";
    PutShopRequestBodyLegalCountryCodeEnum["Tl"] = "TL";
    PutShopRequestBodyLegalCountryCodeEnum["Tm"] = "TM";
    PutShopRequestBodyLegalCountryCodeEnum["Tn"] = "TN";
    PutShopRequestBodyLegalCountryCodeEnum["To"] = "TO";
    PutShopRequestBodyLegalCountryCodeEnum["Tr"] = "TR";
    PutShopRequestBodyLegalCountryCodeEnum["Tt"] = "TT";
    PutShopRequestBodyLegalCountryCodeEnum["Tv"] = "TV";
    PutShopRequestBodyLegalCountryCodeEnum["Tw"] = "TW";
    PutShopRequestBodyLegalCountryCodeEnum["Tz"] = "TZ";
    PutShopRequestBodyLegalCountryCodeEnum["Ua"] = "UA";
    PutShopRequestBodyLegalCountryCodeEnum["Ug"] = "UG";
    PutShopRequestBodyLegalCountryCodeEnum["Um"] = "UM";
    PutShopRequestBodyLegalCountryCodeEnum["Us"] = "US";
    PutShopRequestBodyLegalCountryCodeEnum["Uy"] = "UY";
    PutShopRequestBodyLegalCountryCodeEnum["Uz"] = "UZ";
    PutShopRequestBodyLegalCountryCodeEnum["Va"] = "VA";
    PutShopRequestBodyLegalCountryCodeEnum["Vc"] = "VC";
    PutShopRequestBodyLegalCountryCodeEnum["Ve"] = "VE";
    PutShopRequestBodyLegalCountryCodeEnum["Vg"] = "VG";
    PutShopRequestBodyLegalCountryCodeEnum["Vi"] = "VI";
    PutShopRequestBodyLegalCountryCodeEnum["Vn"] = "VN";
    PutShopRequestBodyLegalCountryCodeEnum["Vu"] = "VU";
    PutShopRequestBodyLegalCountryCodeEnum["Wf"] = "WF";
    PutShopRequestBodyLegalCountryCodeEnum["Ws"] = "WS";
    PutShopRequestBodyLegalCountryCodeEnum["Ye"] = "YE";
    PutShopRequestBodyLegalCountryCodeEnum["Yt"] = "YT";
    PutShopRequestBodyLegalCountryCodeEnum["Za"] = "ZA";
    PutShopRequestBodyLegalCountryCodeEnum["Zm"] = "ZM";
    PutShopRequestBodyLegalCountryCodeEnum["Zw"] = "ZW";
})(PutShopRequestBodyLegalCountryCodeEnum || (PutShopRequestBodyLegalCountryCodeEnum = {}));
export var PutShopRequestBodyShopTypeEnum;
(function (PutShopRequestBodyShopTypeEnum) {
    PutShopRequestBodyShopTypeEnum["Individual"] = "individual";
    PutShopRequestBodyShopTypeEnum["Business"] = "business";
})(PutShopRequestBodyShopTypeEnum || (PutShopRequestBodyShopTypeEnum = {}));
var PutShopRequestBody = /** @class */ (function (_super) {
    __extends(PutShopRequestBody, _super);
    function PutShopRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", PutShopRequestBodyAddress)
    ], PutShopRequestBody.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PutShopRequestBody.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutShopRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_country_code" }),
        __metadata("design:type", String)
    ], PutShopRequestBody.prototype, "legalCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_country_code_confirmed" }),
        __metadata("design:type", Boolean)
    ], PutShopRequestBody.prototype, "legalCountryCodeConfirmed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutShopRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_policy" }),
        __metadata("design:type", String)
    ], PutShopRequestBody.prototype, "paymentPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=return_policy" }),
        __metadata("design:type", String)
    ], PutShopRequestBody.prototype, "returnPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_policy" }),
        __metadata("design:type", String)
    ], PutShopRequestBody.prototype, "shippingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shop_type" }),
        __metadata("design:type", String)
    ], PutShopRequestBody.prototype, "shopType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], PutShopRequestBody.prototype, "website", void 0);
    return PutShopRequestBody;
}(SpeakeasyBase));
export { PutShopRequestBody };
var PutShopSecurity = /** @class */ (function (_super) {
    __extends(PutShopSecurity, _super);
    function PutShopSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PutShopSecurity.prototype, "oauth2", void 0);
    return PutShopSecurity;
}(SpeakeasyBase));
export { PutShopSecurity };
var PutShopRequest = /** @class */ (function (_super) {
    __extends(PutShopRequest, _super);
    function PutShopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutShopRequestBody)
    ], PutShopRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutShopSecurity)
    ], PutShopRequest.prototype, "security", void 0);
    return PutShopRequest;
}(SpeakeasyBase));
export { PutShopRequest };
var PutShopResponse = /** @class */ (function (_super) {
    __extends(PutShopResponse, _super);
    function PutShopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutShopResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutShopResponse.prototype, "statusCode", void 0);
    return PutShopResponse;
}(SpeakeasyBase));
export { PutShopResponse };
