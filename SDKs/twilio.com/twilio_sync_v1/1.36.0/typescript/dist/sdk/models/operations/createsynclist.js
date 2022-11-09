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
export var CREATESYNCLIST_SERVERS = [
    "https://sync.twilio.com",
];
var CreateSyncListPathParams = /** @class */ (function (_super) {
    __extends(CreateSyncListPathParams, _super);
    function CreateSyncListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateSyncListPathParams.prototype, "serviceSid", void 0);
    return CreateSyncListPathParams;
}(SpeakeasyBase));
export { CreateSyncListPathParams };
var CreateSyncListCreateSyncListRequest = /** @class */ (function (_super) {
    __extends(CreateSyncListCreateSyncListRequest, _super);
    function CreateSyncListCreateSyncListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=CollectionTtl;" }),
        __metadata("design:type", Number)
    ], CreateSyncListCreateSyncListRequest.prototype, "collectionTtl", void 0);
    __decorate([
        Metadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], CreateSyncListCreateSyncListRequest.prototype, "ttl", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateSyncListCreateSyncListRequest.prototype, "uniqueName", void 0);
    return CreateSyncListCreateSyncListRequest;
}(SpeakeasyBase));
export { CreateSyncListCreateSyncListRequest };
var CreateSyncListSecurity = /** @class */ (function (_super) {
    __extends(CreateSyncListSecurity, _super);
    function CreateSyncListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSyncListSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSyncListSecurity;
}(SpeakeasyBase));
export { CreateSyncListSecurity };
var CreateSyncListRequest = /** @class */ (function (_super) {
    __extends(CreateSyncListRequest, _super);
    function CreateSyncListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSyncListRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSyncListPathParams)
    ], CreateSyncListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSyncListCreateSyncListRequest)
    ], CreateSyncListRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSyncListSecurity)
    ], CreateSyncListRequest.prototype, "security", void 0);
    return CreateSyncListRequest;
}(SpeakeasyBase));
export { CreateSyncListRequest };
var CreateSyncListResponse = /** @class */ (function (_super) {
    __extends(CreateSyncListResponse, _super);
    function CreateSyncListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSyncListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSyncListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncList)
    ], CreateSyncListResponse.prototype, "syncV1ServiceSyncList", void 0);
    return CreateSyncListResponse;
}(SpeakeasyBase));
export { CreateSyncListResponse };
