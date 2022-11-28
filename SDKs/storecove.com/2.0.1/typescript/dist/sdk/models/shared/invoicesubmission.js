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
import { Attachment } from "./attachment";
import { Invoice } from "./invoice";
import { InvoiceData } from "./invoicedata";
import { InvoiceRecipient } from "./invoicerecipient";
import { Routing } from "./routing";
export var InvoiceSubmissionModeEnum;
(function (InvoiceSubmissionModeEnum) {
    InvoiceSubmissionModeEnum["Direct"] = "direct";
})(InvoiceSubmissionModeEnum || (InvoiceSubmissionModeEnum = {}));
// InvoiceSubmission
/**
 * The invoice you want Storecove to process, with some meta-data.
**/
var InvoiceSubmission = /** @class */ (function (_super) {
    __extends(InvoiceSubmission, _super);
    function InvoiceSubmission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment }),
        __metadata("design:type", Array)
    ], InvoiceSubmission.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createPrimaryImage" }),
        __metadata("design:type", Boolean)
    ], InvoiceSubmission.prototype, "createPrimaryImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document" }),
        __metadata("design:type", String)
    ], InvoiceSubmission.prototype, "document", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentUrl" }),
        __metadata("design:type", String)
    ], InvoiceSubmission.prototype, "documentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idempotencyGuid" }),
        __metadata("design:type", String)
    ], InvoiceSubmission.prototype, "idempotencyGuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invoice" }),
        __metadata("design:type", Invoice)
    ], InvoiceSubmission.prototype, "invoice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invoiceData" }),
        __metadata("design:type", InvoiceData)
    ], InvoiceSubmission.prototype, "invoiceData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invoiceRecipient" }),
        __metadata("design:type", InvoiceRecipient)
    ], InvoiceSubmission.prototype, "invoiceRecipient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legalEntityId" }),
        __metadata("design:type", Number)
    ], InvoiceSubmission.prototype, "legalEntityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legalSupplierId" }),
        __metadata("design:type", Number)
    ], InvoiceSubmission.prototype, "legalSupplierId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], InvoiceSubmission.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routing" }),
        __metadata("design:type", Routing)
    ], InvoiceSubmission.prototype, "routing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierId" }),
        __metadata("design:type", Number)
    ], InvoiceSubmission.prototype, "supplierId", void 0);
    return InvoiceSubmission;
}(SpeakeasyBase));
export { InvoiceSubmission };
