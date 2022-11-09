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
export var UPDATEDEPLOYEDDEVICESFLEET_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateDeployedDevicesFleetPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesFleetPathParams, _super);
    function UpdateDeployedDevicesFleetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesFleetPathParams.prototype, "sid", void 0);
    return UpdateDeployedDevicesFleetPathParams;
}(SpeakeasyBase));
export { UpdateDeployedDevicesFleetPathParams };
var UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest, _super);
    function UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=DefaultDeploymentSid;" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest.prototype, "defaultDeploymentSid", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest.prototype, "friendlyName", void 0);
    return UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest;
}(SpeakeasyBase));
export { UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest };
var UpdateDeployedDevicesFleetSecurity = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesFleetSecurity, _super);
    function UpdateDeployedDevicesFleetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateDeployedDevicesFleetSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateDeployedDevicesFleetSecurity;
}(SpeakeasyBase));
export { UpdateDeployedDevicesFleetSecurity };
var UpdateDeployedDevicesFleetRequest = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesFleetRequest, _super);
    function UpdateDeployedDevicesFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesFleetRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDeployedDevicesFleetPathParams)
    ], UpdateDeployedDevicesFleetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest)
    ], UpdateDeployedDevicesFleetRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDeployedDevicesFleetSecurity)
    ], UpdateDeployedDevicesFleetRequest.prototype, "security", void 0);
    return UpdateDeployedDevicesFleetRequest;
}(SpeakeasyBase));
export { UpdateDeployedDevicesFleetRequest };
var UpdateDeployedDevicesFleetResponse = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesFleetResponse, _super);
    function UpdateDeployedDevicesFleetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesFleetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDeployedDevicesFleetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewDeployedDevicesFleet)
    ], UpdateDeployedDevicesFleetResponse.prototype, "previewDeployedDevicesFleet", void 0);
    return UpdateDeployedDevicesFleetResponse;
}(SpeakeasyBase));
export { UpdateDeployedDevicesFleetResponse };
