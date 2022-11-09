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
export var UPDATEDEPLOYEDDEVICESDEPLOYMENT_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateDeployedDevicesDeploymentPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesDeploymentPathParams, _super);
    function UpdateDeployedDevicesDeploymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDeploymentPathParams.prototype, "fleetSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDeploymentPathParams.prototype, "sid", void 0);
    return UpdateDeployedDevicesDeploymentPathParams;
}(SpeakeasyBase));
export { UpdateDeployedDevicesDeploymentPathParams };
var UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest, _super);
    function UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=SyncServiceSid;" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest.prototype, "syncServiceSid", void 0);
    return UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest;
}(SpeakeasyBase));
export { UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest };
var UpdateDeployedDevicesDeploymentSecurity = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesDeploymentSecurity, _super);
    function UpdateDeployedDevicesDeploymentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateDeployedDevicesDeploymentSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateDeployedDevicesDeploymentSecurity;
}(SpeakeasyBase));
export { UpdateDeployedDevicesDeploymentSecurity };
var UpdateDeployedDevicesDeploymentRequest = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesDeploymentRequest, _super);
    function UpdateDeployedDevicesDeploymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDeploymentRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDeployedDevicesDeploymentPathParams)
    ], UpdateDeployedDevicesDeploymentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest)
    ], UpdateDeployedDevicesDeploymentRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDeployedDevicesDeploymentSecurity)
    ], UpdateDeployedDevicesDeploymentRequest.prototype, "security", void 0);
    return UpdateDeployedDevicesDeploymentRequest;
}(SpeakeasyBase));
export { UpdateDeployedDevicesDeploymentRequest };
var UpdateDeployedDevicesDeploymentResponse = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesDeploymentResponse, _super);
    function UpdateDeployedDevicesDeploymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDeploymentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDeployedDevicesDeploymentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewDeployedDevicesFleetDeployment)
    ], UpdateDeployedDevicesDeploymentResponse.prototype, "previewDeployedDevicesFleetDeployment", void 0);
    return UpdateDeployedDevicesDeploymentResponse;
}(SpeakeasyBase));
export { UpdateDeployedDevicesDeploymentResponse };
