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
export var CREATESYNCSYNCLIST_SERVERS = [
    "https://preview.twilio.com",
];
var CreateSyncSyncListPathParams = /** @class */ (function (_super) {
    __extends(CreateSyncSyncListPathParams, _super);
    function CreateSyncSyncListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateSyncSyncListPathParams.prototype, "serviceSid", void 0);
    return CreateSyncSyncListPathParams;
}(SpeakeasyBase));
export { CreateSyncSyncListPathParams };
var CreateSyncSyncListCreateSyncSyncListRequest = /** @class */ (function (_super) {
    __extends(CreateSyncSyncListCreateSyncSyncListRequest, _super);
    function CreateSyncSyncListCreateSyncSyncListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateSyncSyncListCreateSyncSyncListRequest.prototype, "uniqueName", void 0);
    return CreateSyncSyncListCreateSyncSyncListRequest;
}(SpeakeasyBase));
export { CreateSyncSyncListCreateSyncSyncListRequest };
var CreateSyncSyncListSecurity = /** @class */ (function (_super) {
    __extends(CreateSyncSyncListSecurity, _super);
    function CreateSyncSyncListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSyncSyncListSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSyncSyncListSecurity;
}(SpeakeasyBase));
export { CreateSyncSyncListSecurity };
var CreateSyncSyncListRequest = /** @class */ (function (_super) {
    __extends(CreateSyncSyncListRequest, _super);
    function CreateSyncSyncListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSyncSyncListRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSyncSyncListPathParams)
    ], CreateSyncSyncListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSyncSyncListCreateSyncSyncListRequest)
    ], CreateSyncSyncListRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSyncSyncListSecurity)
    ], CreateSyncSyncListRequest.prototype, "security", void 0);
    return CreateSyncSyncListRequest;
}(SpeakeasyBase));
export { CreateSyncSyncListRequest };
var CreateSyncSyncListResponse = /** @class */ (function (_super) {
    __extends(CreateSyncSyncListResponse, _super);
    function CreateSyncSyncListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSyncSyncListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSyncSyncListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewSyncServiceSyncList)
    ], CreateSyncSyncListResponse.prototype, "previewSyncServiceSyncList", void 0);
    return CreateSyncSyncListResponse;
}(SpeakeasyBase));
export { CreateSyncSyncListResponse };
