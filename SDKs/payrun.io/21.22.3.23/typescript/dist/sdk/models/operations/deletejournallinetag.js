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
var DeleteJournalLineTagPathParams = /** @class */ (function (_super) {
    __extends(DeleteJournalLineTagPathParams, _super);
    function DeleteJournalLineTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], DeleteJournalLineTagPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=JournalLineId" }),
        __metadata("design:type", String)
    ], DeleteJournalLineTagPathParams.prototype, "journalLineId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], DeleteJournalLineTagPathParams.prototype, "tagId", void 0);
    return DeleteJournalLineTagPathParams;
}(SpeakeasyBase));
export { DeleteJournalLineTagPathParams };
var DeleteJournalLineTagHeaders = /** @class */ (function (_super) {
    __extends(DeleteJournalLineTagHeaders, _super);
    function DeleteJournalLineTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeleteJournalLineTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeleteJournalLineTagHeaders.prototype, "authorization", void 0);
    return DeleteJournalLineTagHeaders;
}(SpeakeasyBase));
export { DeleteJournalLineTagHeaders };
var DeleteJournalLineTagRequest = /** @class */ (function (_super) {
    __extends(DeleteJournalLineTagRequest, _super);
    function DeleteJournalLineTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteJournalLineTagPathParams)
    ], DeleteJournalLineTagRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteJournalLineTagHeaders)
    ], DeleteJournalLineTagRequest.prototype, "headers", void 0);
    return DeleteJournalLineTagRequest;
}(SpeakeasyBase));
export { DeleteJournalLineTagRequest };
var DeleteJournalLineTagResponse = /** @class */ (function (_super) {
    __extends(DeleteJournalLineTagResponse, _super);
    function DeleteJournalLineTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteJournalLineTagResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeleteJournalLineTagResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteJournalLineTagResponse.prototype, "statusCode", void 0);
    return DeleteJournalLineTagResponse;
}(SpeakeasyBase));
export { DeleteJournalLineTagResponse };
