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
import { CompanySummary } from "./companysummary";
import { Score } from "./score";
import { Status } from "./status";
import { Summary } from "./summary";
import { VehicleSummary } from "./vehiclesummary";
import { WrongInput } from "./wronginput";
export var CheckCountryEnum;
(function (CheckCountryEnum) {
    CheckCountryEnum["All"] = "ALL";
    CheckCountryEnum["Br"] = "BR";
    CheckCountryEnum["Cl"] = "CL";
    CheckCountryEnum["Co"] = "CO";
    CheckCountryEnum["Cr"] = "CR";
    CheckCountryEnum["Ec"] = "EC";
    CheckCountryEnum["Mx"] = "MX";
    CheckCountryEnum["Pe"] = "PE";
    CheckCountryEnum["Ar"] = "AR";
})(CheckCountryEnum || (CheckCountryEnum = {}));
export var CheckNativeCountryEnum;
(function (CheckNativeCountryEnum) {
    CheckNativeCountryEnum["Ad"] = "ad";
    CheckNativeCountryEnum["Ae"] = "ae";
    CheckNativeCountryEnum["Af"] = "af";
    CheckNativeCountryEnum["Ag"] = "ag";
    CheckNativeCountryEnum["Ai"] = "ai";
    CheckNativeCountryEnum["Al"] = "al";
    CheckNativeCountryEnum["Am"] = "am";
    CheckNativeCountryEnum["An"] = "an";
    CheckNativeCountryEnum["Ao"] = "ao";
    CheckNativeCountryEnum["Aq"] = "aq";
    CheckNativeCountryEnum["Ar"] = "ar";
    CheckNativeCountryEnum["As"] = "as";
    CheckNativeCountryEnum["At"] = "at";
    CheckNativeCountryEnum["Au"] = "au";
    CheckNativeCountryEnum["Aw"] = "aw";
    CheckNativeCountryEnum["Ax"] = "ax";
    CheckNativeCountryEnum["Az"] = "az";
    CheckNativeCountryEnum["Ba"] = "ba";
    CheckNativeCountryEnum["Bb"] = "bb";
    CheckNativeCountryEnum["Bd"] = "bd";
    CheckNativeCountryEnum["Be"] = "be";
    CheckNativeCountryEnum["Bf"] = "bf";
    CheckNativeCountryEnum["Bg"] = "bg";
    CheckNativeCountryEnum["Bh"] = "bh";
    CheckNativeCountryEnum["Bi"] = "bi";
    CheckNativeCountryEnum["Bj"] = "bj";
    CheckNativeCountryEnum["Bm"] = "bm";
    CheckNativeCountryEnum["Bn"] = "bn";
    CheckNativeCountryEnum["Bo"] = "bo";
    CheckNativeCountryEnum["Br"] = "br";
    CheckNativeCountryEnum["Bs"] = "bs";
    CheckNativeCountryEnum["Bt"] = "bt";
    CheckNativeCountryEnum["Bv"] = "bv";
    CheckNativeCountryEnum["Bw"] = "bw";
    CheckNativeCountryEnum["By"] = "by";
    CheckNativeCountryEnum["Bz"] = "bz";
    CheckNativeCountryEnum["Ca"] = "ca";
    CheckNativeCountryEnum["Cc"] = "cc";
    CheckNativeCountryEnum["Cd"] = "cd";
    CheckNativeCountryEnum["Cf"] = "cf";
    CheckNativeCountryEnum["Cg"] = "cg";
    CheckNativeCountryEnum["Ch"] = "ch";
    CheckNativeCountryEnum["Ci"] = "ci";
    CheckNativeCountryEnum["Ck"] = "ck";
    CheckNativeCountryEnum["Cl"] = "cl";
    CheckNativeCountryEnum["Cm"] = "cm";
    CheckNativeCountryEnum["Cn"] = "cn";
    CheckNativeCountryEnum["Co"] = "co";
    CheckNativeCountryEnum["Cr"] = "cr";
    CheckNativeCountryEnum["Cu"] = "cu";
    CheckNativeCountryEnum["Cv"] = "cv";
    CheckNativeCountryEnum["Cx"] = "cx";
    CheckNativeCountryEnum["Cy"] = "cy";
    CheckNativeCountryEnum["Cz"] = "cz";
    CheckNativeCountryEnum["De"] = "de";
    CheckNativeCountryEnum["Dj"] = "dj";
    CheckNativeCountryEnum["Dk"] = "dk";
    CheckNativeCountryEnum["Dm"] = "dm";
    CheckNativeCountryEnum["Do"] = "do";
    CheckNativeCountryEnum["Dz"] = "dz";
    CheckNativeCountryEnum["Ea"] = "ea";
    CheckNativeCountryEnum["Ec"] = "ec";
    CheckNativeCountryEnum["Ee"] = "ee";
    CheckNativeCountryEnum["Eg"] = "eg";
    CheckNativeCountryEnum["Eh"] = "eh";
    CheckNativeCountryEnum["Er"] = "er";
    CheckNativeCountryEnum["Es"] = "es";
    CheckNativeCountryEnum["Et"] = "et";
    CheckNativeCountryEnum["Fi"] = "fi";
    CheckNativeCountryEnum["Fj"] = "fj";
    CheckNativeCountryEnum["Fk"] = "fk";
    CheckNativeCountryEnum["Fm"] = "fm";
    CheckNativeCountryEnum["Fo"] = "fo";
    CheckNativeCountryEnum["Fr"] = "fr";
    CheckNativeCountryEnum["Ga"] = "ga";
    CheckNativeCountryEnum["Gb"] = "gb";
    CheckNativeCountryEnum["Gd"] = "gd";
    CheckNativeCountryEnum["Ge"] = "ge";
    CheckNativeCountryEnum["Gf"] = "gf";
    CheckNativeCountryEnum["Gg"] = "gg";
    CheckNativeCountryEnum["Gh"] = "gh";
    CheckNativeCountryEnum["Gi"] = "gi";
    CheckNativeCountryEnum["Gl"] = "gl";
    CheckNativeCountryEnum["Gm"] = "gm";
    CheckNativeCountryEnum["Gn"] = "gn";
    CheckNativeCountryEnum["Gp"] = "gp";
    CheckNativeCountryEnum["Gq"] = "gq";
    CheckNativeCountryEnum["Gr"] = "gr";
    CheckNativeCountryEnum["Gs"] = "gs";
    CheckNativeCountryEnum["Gt"] = "gt";
    CheckNativeCountryEnum["Gu"] = "gu";
    CheckNativeCountryEnum["Gw"] = "gw";
    CheckNativeCountryEnum["Gy"] = "gy";
    CheckNativeCountryEnum["Hk"] = "hk";
    CheckNativeCountryEnum["Hm"] = "hm";
    CheckNativeCountryEnum["Hn"] = "hn";
    CheckNativeCountryEnum["Hr"] = "hr";
    CheckNativeCountryEnum["Ht"] = "ht";
    CheckNativeCountryEnum["Hu"] = "hu";
    CheckNativeCountryEnum["Id"] = "id";
    CheckNativeCountryEnum["Ie"] = "ie";
    CheckNativeCountryEnum["Il"] = "il";
    CheckNativeCountryEnum["Im"] = "im";
    CheckNativeCountryEnum["In"] = "in";
    CheckNativeCountryEnum["Io"] = "io";
    CheckNativeCountryEnum["Iq"] = "iq";
    CheckNativeCountryEnum["Ir"] = "ir";
    CheckNativeCountryEnum["Is"] = "is";
    CheckNativeCountryEnum["It"] = "it";
    CheckNativeCountryEnum["Je"] = "je";
    CheckNativeCountryEnum["Jm"] = "jm";
    CheckNativeCountryEnum["Jo"] = "jo";
    CheckNativeCountryEnum["Jp"] = "jp";
    CheckNativeCountryEnum["Ke"] = "ke";
    CheckNativeCountryEnum["Kg"] = "kg";
    CheckNativeCountryEnum["Kh"] = "kh";
    CheckNativeCountryEnum["Ki"] = "ki";
    CheckNativeCountryEnum["Km"] = "km";
    CheckNativeCountryEnum["Kn"] = "kn";
    CheckNativeCountryEnum["Kp"] = "kp";
    CheckNativeCountryEnum["Kr"] = "kr";
    CheckNativeCountryEnum["Kw"] = "kw";
    CheckNativeCountryEnum["Ky"] = "ky";
    CheckNativeCountryEnum["Kz"] = "kz";
    CheckNativeCountryEnum["La"] = "la";
    CheckNativeCountryEnum["Lb"] = "lb";
    CheckNativeCountryEnum["Lc"] = "lc";
    CheckNativeCountryEnum["Li"] = "li";
    CheckNativeCountryEnum["Lk"] = "lk";
    CheckNativeCountryEnum["Lr"] = "lr";
    CheckNativeCountryEnum["Ls"] = "ls";
    CheckNativeCountryEnum["Lt"] = "lt";
    CheckNativeCountryEnum["Lu"] = "lu";
    CheckNativeCountryEnum["Lv"] = "lv";
    CheckNativeCountryEnum["Ly"] = "ly";
    CheckNativeCountryEnum["Ma"] = "ma";
    CheckNativeCountryEnum["Mc"] = "mc";
    CheckNativeCountryEnum["Md"] = "md";
    CheckNativeCountryEnum["Me"] = "me";
    CheckNativeCountryEnum["Mg"] = "mg";
    CheckNativeCountryEnum["Mh"] = "mh";
    CheckNativeCountryEnum["Mk"] = "mk";
    CheckNativeCountryEnum["Ml"] = "ml";
    CheckNativeCountryEnum["Mm"] = "mm";
    CheckNativeCountryEnum["Mn"] = "mn";
    CheckNativeCountryEnum["Mo"] = "mo";
    CheckNativeCountryEnum["Mp"] = "mp";
    CheckNativeCountryEnum["Mq"] = "mq";
    CheckNativeCountryEnum["Mr"] = "mr";
    CheckNativeCountryEnum["Ms"] = "ms";
    CheckNativeCountryEnum["Mt"] = "mt";
    CheckNativeCountryEnum["Mu"] = "mu";
    CheckNativeCountryEnum["Mv"] = "mv";
    CheckNativeCountryEnum["Mw"] = "mw";
    CheckNativeCountryEnum["Mx"] = "mx";
    CheckNativeCountryEnum["My"] = "my";
    CheckNativeCountryEnum["Mz"] = "mz";
    CheckNativeCountryEnum["Na"] = "na";
    CheckNativeCountryEnum["Nc"] = "nc";
    CheckNativeCountryEnum["Ne"] = "ne";
    CheckNativeCountryEnum["Nf"] = "nf";
    CheckNativeCountryEnum["Ng"] = "ng";
    CheckNativeCountryEnum["Ni"] = "ni";
    CheckNativeCountryEnum["Nl"] = "nl";
    CheckNativeCountryEnum["No"] = "no";
    CheckNativeCountryEnum["Np"] = "np";
    CheckNativeCountryEnum["Nr"] = "nr";
    CheckNativeCountryEnum["Nu"] = "nu";
    CheckNativeCountryEnum["Nz"] = "nz";
    CheckNativeCountryEnum["Om"] = "om";
    CheckNativeCountryEnum["Pa"] = "pa";
    CheckNativeCountryEnum["Pe"] = "pe";
    CheckNativeCountryEnum["Pf"] = "pf";
    CheckNativeCountryEnum["Pg"] = "pg";
    CheckNativeCountryEnum["Ph"] = "ph";
    CheckNativeCountryEnum["Pk"] = "pk";
    CheckNativeCountryEnum["Pl"] = "pl";
    CheckNativeCountryEnum["Pm"] = "pm";
    CheckNativeCountryEnum["Pn"] = "pn";
    CheckNativeCountryEnum["Pr"] = "pr";
    CheckNativeCountryEnum["Ps"] = "ps";
    CheckNativeCountryEnum["Pt"] = "pt";
    CheckNativeCountryEnum["Pw"] = "pw";
    CheckNativeCountryEnum["Py"] = "py";
    CheckNativeCountryEnum["Qa"] = "qa";
    CheckNativeCountryEnum["Re"] = "re";
    CheckNativeCountryEnum["Ro"] = "ro";
    CheckNativeCountryEnum["Rs"] = "rs";
    CheckNativeCountryEnum["Ru"] = "ru";
    CheckNativeCountryEnum["Rw"] = "rw";
    CheckNativeCountryEnum["Sa"] = "sa";
    CheckNativeCountryEnum["Sb"] = "sb";
    CheckNativeCountryEnum["Sc"] = "sc";
    CheckNativeCountryEnum["Sd"] = "sd";
    CheckNativeCountryEnum["Se"] = "se";
    CheckNativeCountryEnum["Sg"] = "sg";
    CheckNativeCountryEnum["Sh"] = "sh";
    CheckNativeCountryEnum["Si"] = "si";
    CheckNativeCountryEnum["Sj"] = "sj";
    CheckNativeCountryEnum["Sk"] = "sk";
    CheckNativeCountryEnum["Sl"] = "sl";
    CheckNativeCountryEnum["Sm"] = "sm";
    CheckNativeCountryEnum["Sn"] = "sn";
    CheckNativeCountryEnum["So"] = "so";
    CheckNativeCountryEnum["Sr"] = "sr";
    CheckNativeCountryEnum["St"] = "st";
    CheckNativeCountryEnum["Sv"] = "sv";
    CheckNativeCountryEnum["Sy"] = "sy";
    CheckNativeCountryEnum["Sz"] = "sz";
    CheckNativeCountryEnum["Tc"] = "tc";
    CheckNativeCountryEnum["Td"] = "td";
    CheckNativeCountryEnum["Tf"] = "tf";
    CheckNativeCountryEnum["Tg"] = "tg";
    CheckNativeCountryEnum["Th"] = "th";
    CheckNativeCountryEnum["Tj"] = "tj";
    CheckNativeCountryEnum["Tk"] = "tk";
    CheckNativeCountryEnum["Tl"] = "tl";
    CheckNativeCountryEnum["Tm"] = "tm";
    CheckNativeCountryEnum["Tn"] = "tn";
    CheckNativeCountryEnum["To"] = "to";
    CheckNativeCountryEnum["Tr"] = "tr";
    CheckNativeCountryEnum["Tt"] = "tt";
    CheckNativeCountryEnum["Tv"] = "tv";
    CheckNativeCountryEnum["Tw"] = "tw";
    CheckNativeCountryEnum["Tz"] = "tz";
    CheckNativeCountryEnum["Ua"] = "ua";
    CheckNativeCountryEnum["Ug"] = "ug";
    CheckNativeCountryEnum["Um"] = "um";
    CheckNativeCountryEnum["Us"] = "us";
    CheckNativeCountryEnum["Uy"] = "uy";
    CheckNativeCountryEnum["Uz"] = "uz";
    CheckNativeCountryEnum["Va"] = "va";
    CheckNativeCountryEnum["Vc"] = "vc";
    CheckNativeCountryEnum["Ve"] = "ve";
    CheckNativeCountryEnum["Vg"] = "vg";
    CheckNativeCountryEnum["Vi"] = "vi";
    CheckNativeCountryEnum["Vn"] = "vn";
    CheckNativeCountryEnum["Vu"] = "vu";
    CheckNativeCountryEnum["Wf"] = "wf";
    CheckNativeCountryEnum["Ws"] = "ws";
    CheckNativeCountryEnum["Ye"] = "ye";
    CheckNativeCountryEnum["Yt"] = "yt";
    CheckNativeCountryEnum["Za"] = "za";
    CheckNativeCountryEnum["Zm"] = "zm";
    CheckNativeCountryEnum["Zw"] = "zw";
})(CheckNativeCountryEnum || (CheckNativeCountryEnum = {}));
export var CheckRegionEnum;
(function (CheckRegionEnum) {
    CheckRegionEnum["Df"] = "DF";
    CheckRegionEnum["Ac"] = "AC";
    CheckRegionEnum["Al"] = "AL";
    CheckRegionEnum["Ap"] = "AP";
    CheckRegionEnum["Am"] = "AM";
    CheckRegionEnum["Ba"] = "BA";
    CheckRegionEnum["Ce"] = "CE";
    CheckRegionEnum["Es"] = "ES";
    CheckRegionEnum["Go"] = "GO";
    CheckRegionEnum["Ma"] = "MA";
    CheckRegionEnum["Mt"] = "MT";
    CheckRegionEnum["Ms"] = "MS";
    CheckRegionEnum["Mg"] = "MG";
    CheckRegionEnum["Pa"] = "PA";
    CheckRegionEnum["Pb"] = "PB";
    CheckRegionEnum["Pr"] = "PR";
    CheckRegionEnum["Pe"] = "PE";
    CheckRegionEnum["Pi"] = "PI";
    CheckRegionEnum["Rj"] = "RJ";
    CheckRegionEnum["Rn"] = "RN";
    CheckRegionEnum["Rs"] = "RS";
    CheckRegionEnum["Ro"] = "RO";
    CheckRegionEnum["Rr"] = "RR";
    CheckRegionEnum["Sc"] = "SC";
    CheckRegionEnum["Sp"] = "SP";
    CheckRegionEnum["Se"] = "SE";
    CheckRegionEnum["To"] = "TO";
})(CheckRegionEnum || (CheckRegionEnum = {}));
export var CheckStatusEnum;
(function (CheckStatusEnum) {
    CheckStatusEnum["NotStarted"] = "not_started";
    CheckStatusEnum["InProgress"] = "in_progress";
    CheckStatusEnum["Completed"] = "completed";
    CheckStatusEnum["Error"] = "error";
    CheckStatusEnum["Delayed"] = "delayed";
})(CheckStatusEnum || (CheckStatusEnum = {}));
// Check
/**
 * Represents a background check
**/
var Check = /** @class */ (function (_super) {
    __extends(Check, _super);
    function Check() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birth_certificate" }),
        __metadata("design:type", String)
    ], Check.prototype, "birthCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_id" }),
        __metadata("design:type", String)
    ], Check.prototype, "checkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_summary" }),
        __metadata("design:type", CompanySummary)
    ], Check.prototype, "companySummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Check.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creation_date" }),
        __metadata("design:type", Date)
    ], Check.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_of_birth" }),
        __metadata("design:type", Date)
    ], Check.prototype, "dateOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diplomatic_id" }),
        __metadata("design:type", String)
    ], Check.prototype, "diplomaticId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driver_license" }),
        __metadata("design:type", String)
    ], Check.prototype, "driverLicense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], Check.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foreign_id" }),
        __metadata("design:type", String)
    ], Check.prototype, "foreignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homonym_probability" }),
        __metadata("design:type", Number)
    ], Check.prototype, "homonymProbability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homonym_score" }),
        __metadata("design:type", Number)
    ], Check.prototype, "homonymScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homonym_scores", elemType: Score }),
        __metadata("design:type", Array)
    ], Check.prototype, "homonymScores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id_score" }),
        __metadata("design:type", Number)
    ], Check.prototype, "idScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_date" }),
        __metadata("design:type", Date)
    ], Check.prototype, "issueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], Check.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license_plate" }),
        __metadata("design:type", String)
    ], Check.prototype, "licensePlate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=national_id" }),
        __metadata("design:type", String)
    ], Check.prototype, "nationalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=native_country" }),
        __metadata("design:type", String)
    ], Check.prototype, "nativeCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_document_id" }),
        __metadata("design:type", String)
    ], Check.prototype, "ownerDocumentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_document_type" }),
        __metadata("design:type", String)
    ], Check.prototype, "ownerDocumentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passport" }),
        __metadata("design:type", String)
    ], Check.prototype, "passport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_date" }),
        __metadata("design:type", String)
    ], Check.prototype, "paymentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pep" }),
        __metadata("design:type", String)
    ], Check.prototype, "pep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], Check.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=professional_card" }),
        __metadata("design:type", String)
    ], Check.prototype, "professionalCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ptp" }),
        __metadata("design:type", String)
    ], Check.prototype, "ptp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], Check.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_id" }),
        __metadata("design:type", String)
    ], Check.prototype, "reportId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], Check.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scores", elemType: Score }),
        __metadata("design:type", Array)
    ], Check.prototype, "scores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Check.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses", elemType: Status }),
        __metadata("design:type", Array)
    ], Check.prototype, "statuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", Summary)
    ], Check.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_id" }),
        __metadata("design:type", String)
    ], Check.prototype, "taxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", Object)
    ], Check.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_date" }),
        __metadata("design:type", Date)
    ], Check.prototype, "updateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vehicle_id" }),
        __metadata("design:type", String)
    ], Check.prototype, "vehicleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vehicle_summary" }),
        __metadata("design:type", VehicleSummary)
    ], Check.prototype, "vehicleSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wrong_inputs", elemType: WrongInput }),
        __metadata("design:type", Array)
    ], Check.prototype, "wrongInputs", void 0);
    return Check;
}(SpeakeasyBase));
export { Check };
