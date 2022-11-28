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
export var FetchFaxMediaServerList = [
    "https://fax.twilio.com",
];
var FetchFaxMediaPathParams = /** @class */ (function (_super) {
    __extends(FetchFaxMediaPathParams, _super);
    function FetchFaxMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FaxSid" }),
        __metadata("design:type", String)
    ], FetchFaxMediaPathParams.prototype, "faxSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchFaxMediaPathParams.prototype, "sid", void 0);
    return FetchFaxMediaPathParams;
}(SpeakeasyBase));
export { FetchFaxMediaPathParams };
var FetchFaxMediaSecurity = /** @class */ (function (_super) {
    __extends(FetchFaxMediaSecurity, _super);
    function FetchFaxMediaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchFaxMediaSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchFaxMediaSecurity;
}(SpeakeasyBase));
export { FetchFaxMediaSecurity };
var FetchFaxMediaRequest = /** @class */ (function (_super) {
    __extends(FetchFaxMediaRequest, _super);
    function FetchFaxMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchFaxMediaRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchFaxMediaPathParams)
    ], FetchFaxMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchFaxMediaSecurity)
    ], FetchFaxMediaRequest.prototype, "security", void 0);
    return FetchFaxMediaRequest;
}(SpeakeasyBase));
export { FetchFaxMediaRequest };
var FetchFaxMediaResponse = /** @class */ (function (_super) {
    __extends(FetchFaxMediaResponse, _super);
    function FetchFaxMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchFaxMediaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchFaxMediaResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FaxV1FaxFaxMedia)
    ], FetchFaxMediaResponse.prototype, "faxV1FaxFaxMedia", void 0);
    return FetchFaxMediaResponse;
}(SpeakeasyBase));
export { FetchFaxMediaResponse };
