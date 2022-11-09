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
export var DELETESOURCEIPMAPPING_SERVERS = [
    "https://voice.twilio.com",
];
var DeleteSourceIpMappingPathParams = /** @class */ (function (_super) {
    __extends(DeleteSourceIpMappingPathParams, _super);
    function DeleteSourceIpMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteSourceIpMappingPathParams.prototype, "sid", void 0);
    return DeleteSourceIpMappingPathParams;
}(SpeakeasyBase));
export { DeleteSourceIpMappingPathParams };
var DeleteSourceIpMappingSecurity = /** @class */ (function (_super) {
    __extends(DeleteSourceIpMappingSecurity, _super);
    function DeleteSourceIpMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSourceIpMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSourceIpMappingSecurity;
}(SpeakeasyBase));
export { DeleteSourceIpMappingSecurity };
var DeleteSourceIpMappingRequest = /** @class */ (function (_super) {
    __extends(DeleteSourceIpMappingRequest, _super);
    function DeleteSourceIpMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSourceIpMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSourceIpMappingPathParams)
    ], DeleteSourceIpMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSourceIpMappingSecurity)
    ], DeleteSourceIpMappingRequest.prototype, "security", void 0);
    return DeleteSourceIpMappingRequest;
}(SpeakeasyBase));
export { DeleteSourceIpMappingRequest };
var DeleteSourceIpMappingResponse = /** @class */ (function (_super) {
    __extends(DeleteSourceIpMappingResponse, _super);
    function DeleteSourceIpMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSourceIpMappingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSourceIpMappingResponse.prototype, "statusCode", void 0);
    return DeleteSourceIpMappingResponse;
}(SpeakeasyBase));
export { DeleteSourceIpMappingResponse };
