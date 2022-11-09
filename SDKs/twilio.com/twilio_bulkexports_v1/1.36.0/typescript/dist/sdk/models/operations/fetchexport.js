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
export var FETCHEXPORT_SERVERS = [
    "https://bulkexports.twilio.com",
];
var FetchExportPathParams = /** @class */ (function (_super) {
    __extends(FetchExportPathParams, _super);
    function FetchExportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" }),
        __metadata("design:type", String)
    ], FetchExportPathParams.prototype, "resourceType", void 0);
    return FetchExportPathParams;
}(SpeakeasyBase));
export { FetchExportPathParams };
var FetchExportSecurity = /** @class */ (function (_super) {
    __extends(FetchExportSecurity, _super);
    function FetchExportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchExportSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchExportSecurity;
}(SpeakeasyBase));
export { FetchExportSecurity };
var FetchExportRequest = /** @class */ (function (_super) {
    __extends(FetchExportRequest, _super);
    function FetchExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchExportRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchExportPathParams)
    ], FetchExportRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchExportSecurity)
    ], FetchExportRequest.prototype, "security", void 0);
    return FetchExportRequest;
}(SpeakeasyBase));
export { FetchExportRequest };
var FetchExportResponse = /** @class */ (function (_super) {
    __extends(FetchExportResponse, _super);
    function FetchExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchExportResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchExportResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BulkexportsV1Export)
    ], FetchExportResponse.prototype, "bulkexportsV1Export", void 0);
    return FetchExportResponse;
}(SpeakeasyBase));
export { FetchExportResponse };
