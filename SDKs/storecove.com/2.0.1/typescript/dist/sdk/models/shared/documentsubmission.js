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
import { SendableDocument } from "./sendabledocument";
import { Routing } from "./routing";
// DocumentSubmission
/**
 * The document you want Storecove to send, with some meta-data.
**/
var DocumentSubmission = /** @class */ (function (_super) {
    __extends(DocumentSubmission, _super);
    function DocumentSubmission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment }),
        __metadata("design:type", Array)
    ], DocumentSubmission.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createPrimaryImage" }),
        __metadata("design:type", Boolean)
    ], DocumentSubmission.prototype, "createPrimaryImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document" }),
        __metadata("design:type", SendableDocument)
    ], DocumentSubmission.prototype, "document", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idempotencyGuid" }),
        __metadata("design:type", String)
    ], DocumentSubmission.prototype, "idempotencyGuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legalEntityId" }),
        __metadata("design:type", Number)
    ], DocumentSubmission.prototype, "legalEntityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receiveGuid" }),
        __metadata("design:type", String)
    ], DocumentSubmission.prototype, "receiveGuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routing" }),
        __metadata("design:type", Routing)
    ], DocumentSubmission.prototype, "routing", void 0);
    return DocumentSubmission;
}(SpeakeasyBase));
export { DocumentSubmission };
