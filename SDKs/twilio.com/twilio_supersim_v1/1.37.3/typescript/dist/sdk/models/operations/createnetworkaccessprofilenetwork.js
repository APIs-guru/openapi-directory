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
export var CreateNetworkAccessProfileNetworkServerList = [
    "https://supersim.twilio.com",
];
var CreateNetworkAccessProfileNetworkPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkAccessProfileNetworkPathParams, _super);
    function CreateNetworkAccessProfileNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=NetworkAccessProfileSid" }),
        __metadata("design:type", String)
    ], CreateNetworkAccessProfileNetworkPathParams.prototype, "networkAccessProfileSid", void 0);
    return CreateNetworkAccessProfileNetworkPathParams;
}(SpeakeasyBase));
export { CreateNetworkAccessProfileNetworkPathParams };
var CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest, _super);
    function CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Network;" }),
        __metadata("design:type", String)
    ], CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest.prototype, "network", void 0);
    return CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest;
}(SpeakeasyBase));
export { CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest };
var CreateNetworkAccessProfileNetworkSecurity = /** @class */ (function (_super) {
    __extends(CreateNetworkAccessProfileNetworkSecurity, _super);
    function CreateNetworkAccessProfileNetworkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateNetworkAccessProfileNetworkSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateNetworkAccessProfileNetworkSecurity;
}(SpeakeasyBase));
export { CreateNetworkAccessProfileNetworkSecurity };
var CreateNetworkAccessProfileNetworkRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkAccessProfileNetworkRequest, _super);
    function CreateNetworkAccessProfileNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkAccessProfileNetworkRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkAccessProfileNetworkPathParams)
    ], CreateNetworkAccessProfileNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest)
    ], CreateNetworkAccessProfileNetworkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkAccessProfileNetworkSecurity)
    ], CreateNetworkAccessProfileNetworkRequest.prototype, "security", void 0);
    return CreateNetworkAccessProfileNetworkRequest;
}(SpeakeasyBase));
export { CreateNetworkAccessProfileNetworkRequest };
var CreateNetworkAccessProfileNetworkResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkAccessProfileNetworkResponse, _super);
    function CreateNetworkAccessProfileNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkAccessProfileNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkAccessProfileNetworkResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork)
    ], CreateNetworkAccessProfileNetworkResponse.prototype, "supersimV1NetworkAccessProfileNetworkAccessProfileNetwork", void 0);
    return CreateNetworkAccessProfileNetworkResponse;
}(SpeakeasyBase));
export { CreateNetworkAccessProfileNetworkResponse };
