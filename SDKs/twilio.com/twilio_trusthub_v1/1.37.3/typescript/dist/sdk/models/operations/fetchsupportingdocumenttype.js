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
export var FetchSupportingDocumentTypeServerList = [
    "https://trusthub.twilio.com",
];
var FetchSupportingDocumentTypePathParams = /** @class */ (function (_super) {
    __extends(FetchSupportingDocumentTypePathParams, _super);
    function FetchSupportingDocumentTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSupportingDocumentTypePathParams.prototype, "sid", void 0);
    return FetchSupportingDocumentTypePathParams;
}(SpeakeasyBase));
export { FetchSupportingDocumentTypePathParams };
var FetchSupportingDocumentTypeSecurity = /** @class */ (function (_super) {
    __extends(FetchSupportingDocumentTypeSecurity, _super);
    function FetchSupportingDocumentTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSupportingDocumentTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSupportingDocumentTypeSecurity;
}(SpeakeasyBase));
export { FetchSupportingDocumentTypeSecurity };
var FetchSupportingDocumentTypeRequest = /** @class */ (function (_super) {
    __extends(FetchSupportingDocumentTypeRequest, _super);
    function FetchSupportingDocumentTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSupportingDocumentTypeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSupportingDocumentTypePathParams)
    ], FetchSupportingDocumentTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSupportingDocumentTypeSecurity)
    ], FetchSupportingDocumentTypeRequest.prototype, "security", void 0);
    return FetchSupportingDocumentTypeRequest;
}(SpeakeasyBase));
export { FetchSupportingDocumentTypeRequest };
var FetchSupportingDocumentTypeResponse = /** @class */ (function (_super) {
    __extends(FetchSupportingDocumentTypeResponse, _super);
    function FetchSupportingDocumentTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSupportingDocumentTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSupportingDocumentTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrusthubV1SupportingDocumentType)
    ], FetchSupportingDocumentTypeResponse.prototype, "trusthubV1SupportingDocumentType", void 0);
    return FetchSupportingDocumentTypeResponse;
}(SpeakeasyBase));
export { FetchSupportingDocumentTypeResponse };
