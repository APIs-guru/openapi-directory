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
export var InvoiceResponseClarificationClarificationCodeEnum;
(function (InvoiceResponseClarificationClarificationCodeEnum) {
    InvoiceResponseClarificationClarificationCodeEnum["Ref"] = "REF";
    InvoiceResponseClarificationClarificationCodeEnum["Leg"] = "LEG";
    InvoiceResponseClarificationClarificationCodeEnum["Rec"] = "REC";
    InvoiceResponseClarificationClarificationCodeEnum["Qua"] = "QUA";
    InvoiceResponseClarificationClarificationCodeEnum["Del"] = "DEL";
    InvoiceResponseClarificationClarificationCodeEnum["Pri"] = "PRI";
    InvoiceResponseClarificationClarificationCodeEnum["Qty"] = "QTY";
    InvoiceResponseClarificationClarificationCodeEnum["Itm"] = "ITM";
    InvoiceResponseClarificationClarificationCodeEnum["Pay"] = "PAY";
    InvoiceResponseClarificationClarificationCodeEnum["Unr"] = "UNR";
    InvoiceResponseClarificationClarificationCodeEnum["Fin"] = "FIN";
    InvoiceResponseClarificationClarificationCodeEnum["Oth"] = "OTH";
    InvoiceResponseClarificationClarificationCodeEnum["Pin"] = "PIN";
    InvoiceResponseClarificationClarificationCodeEnum["Nin"] = "NIN";
    InvoiceResponseClarificationClarificationCodeEnum["Cnf"] = "CNF";
    InvoiceResponseClarificationClarificationCodeEnum["Cnp"] = "CNP";
    InvoiceResponseClarificationClarificationCodeEnum["Cna"] = "CNA";
})(InvoiceResponseClarificationClarificationCodeEnum || (InvoiceResponseClarificationClarificationCodeEnum = {}));
export var InvoiceResponseClarificationClarificationCodeTypeEnum;
(function (InvoiceResponseClarificationClarificationCodeTypeEnum) {
    InvoiceResponseClarificationClarificationCodeTypeEnum["OpStatusReason"] = "OPStatusReason";
    InvoiceResponseClarificationClarificationCodeTypeEnum["OpStatusAction"] = "OPStatusAction";
})(InvoiceResponseClarificationClarificationCodeTypeEnum || (InvoiceResponseClarificationClarificationCodeTypeEnum = {}));
// InvoiceResponseClarification
/**
 * A clarification for why a received invoice was rejected (RE) or under query (UQ) and what action to take.
**/
var InvoiceResponseClarification = /** @class */ (function (_super) {
    __extends(InvoiceResponseClarification, _super);
    function InvoiceResponseClarification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clarification" }),
        __metadata("design:type", String)
    ], InvoiceResponseClarification.prototype, "clarification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clarificationCode" }),
        __metadata("design:type", String)
    ], InvoiceResponseClarification.prototype, "clarificationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clarificationCodeType" }),
        __metadata("design:type", String)
    ], InvoiceResponseClarification.prototype, "clarificationCodeType", void 0);
    return InvoiceResponseClarification;
}(SpeakeasyBase));
export { InvoiceResponseClarification };
