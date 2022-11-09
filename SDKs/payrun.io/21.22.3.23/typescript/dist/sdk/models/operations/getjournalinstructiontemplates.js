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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetJournalInstructionTemplatesHeaders = /** @class */ (function (_super) {
    __extends(GetJournalInstructionTemplatesHeaders, _super);
    function GetJournalInstructionTemplatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetJournalInstructionTemplatesHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetJournalInstructionTemplatesHeaders.prototype, "authorization", void 0);
    return GetJournalInstructionTemplatesHeaders;
}(SpeakeasyBase));
export { GetJournalInstructionTemplatesHeaders };
var GetJournalInstructionTemplatesRequest = /** @class */ (function (_super) {
    __extends(GetJournalInstructionTemplatesRequest, _super);
    function GetJournalInstructionTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetJournalInstructionTemplatesHeaders)
    ], GetJournalInstructionTemplatesRequest.prototype, "headers", void 0);
    return GetJournalInstructionTemplatesRequest;
}(SpeakeasyBase));
export { GetJournalInstructionTemplatesRequest };
var GetJournalInstructionTemplatesResponse = /** @class */ (function (_super) {
    __extends(GetJournalInstructionTemplatesResponse, _super);
    function GetJournalInstructionTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetJournalInstructionTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetJournalInstructionTemplatesResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetJournalInstructionTemplatesResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetJournalInstructionTemplatesResponse.prototype, "statusCode", void 0);
    return GetJournalInstructionTemplatesResponse;
}(SpeakeasyBase));
export { GetJournalInstructionTemplatesResponse };
