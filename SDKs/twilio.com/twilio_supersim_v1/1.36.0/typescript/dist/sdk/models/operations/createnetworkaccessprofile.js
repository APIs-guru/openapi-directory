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
export var CREATENETWORKACCESSPROFILE_SERVERS = [
    "https://supersim.twilio.com",
];
var CreateNetworkAccessProfileCreateNetworkAccessProfileRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkAccessProfileCreateNetworkAccessProfileRequest, _super);
    function CreateNetworkAccessProfileCreateNetworkAccessProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Networks;" }),
        __metadata("design:type", Array)
    ], CreateNetworkAccessProfileCreateNetworkAccessProfileRequest.prototype, "networks", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateNetworkAccessProfileCreateNetworkAccessProfileRequest.prototype, "uniqueName", void 0);
    return CreateNetworkAccessProfileCreateNetworkAccessProfileRequest;
}(SpeakeasyBase));
export { CreateNetworkAccessProfileCreateNetworkAccessProfileRequest };
var CreateNetworkAccessProfileSecurity = /** @class */ (function (_super) {
    __extends(CreateNetworkAccessProfileSecurity, _super);
    function CreateNetworkAccessProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateNetworkAccessProfileSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateNetworkAccessProfileSecurity;
}(SpeakeasyBase));
export { CreateNetworkAccessProfileSecurity };
var CreateNetworkAccessProfileRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkAccessProfileRequest, _super);
    function CreateNetworkAccessProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateNetworkAccessProfileRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateNetworkAccessProfileCreateNetworkAccessProfileRequest)
    ], CreateNetworkAccessProfileRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateNetworkAccessProfileSecurity)
    ], CreateNetworkAccessProfileRequest.prototype, "security", void 0);
    return CreateNetworkAccessProfileRequest;
}(SpeakeasyBase));
export { CreateNetworkAccessProfileRequest };
var CreateNetworkAccessProfileResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkAccessProfileResponse, _super);
    function CreateNetworkAccessProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateNetworkAccessProfileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateNetworkAccessProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SupersimV1NetworkAccessProfile)
    ], CreateNetworkAccessProfileResponse.prototype, "supersimV1NetworkAccessProfile", void 0);
    return CreateNetworkAccessProfileResponse;
}(SpeakeasyBase));
export { CreateNetworkAccessProfileResponse };
