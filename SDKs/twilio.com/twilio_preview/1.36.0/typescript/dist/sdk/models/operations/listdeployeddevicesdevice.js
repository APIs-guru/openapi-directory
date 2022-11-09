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
export var LISTDEPLOYEDDEVICESDEVICE_SERVERS = [
    "https://preview.twilio.com",
];
var ListDeployedDevicesDevicePathParams = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDevicePathParams, _super);
    function ListDeployedDevicesDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDevicePathParams.prototype, "fleetSid", void 0);
    return ListDeployedDevicesDevicePathParams;
}(SpeakeasyBase));
export { ListDeployedDevicesDevicePathParams };
var ListDeployedDevicesDeviceQueryParams = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeviceQueryParams, _super);
    function ListDeployedDevicesDeviceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DeploymentSid" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceQueryParams.prototype, "deploymentSid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesDeviceQueryParams.prototype, "pageSize", void 0);
    return ListDeployedDevicesDeviceQueryParams;
}(SpeakeasyBase));
export { ListDeployedDevicesDeviceQueryParams };
var ListDeployedDevicesDeviceSecurity = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeviceSecurity, _super);
    function ListDeployedDevicesDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDeployedDevicesDeviceSecurity.prototype, "accountSidAuthToken", void 0);
    return ListDeployedDevicesDeviceSecurity;
}(SpeakeasyBase));
export { ListDeployedDevicesDeviceSecurity };
var ListDeployedDevicesDeviceRequest = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeviceRequest, _super);
    function ListDeployedDevicesDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDeployedDevicesDevicePathParams)
    ], ListDeployedDevicesDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDeployedDevicesDeviceQueryParams)
    ], ListDeployedDevicesDeviceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDeployedDevicesDeviceSecurity)
    ], ListDeployedDevicesDeviceRequest.prototype, "security", void 0);
    return ListDeployedDevicesDeviceRequest;
}(SpeakeasyBase));
export { ListDeployedDevicesDeviceRequest };
var ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta, _super);
    function ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "url", void 0);
    return ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta;
}(SpeakeasyBase));
export { ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta };
var ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse, _super);
    function ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=devices", elemType: shared.PreviewDeployedDevicesFleetDevice }),
        __metadata("design:type", Array)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse.prototype, "devices", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse.prototype, "meta", void 0);
    return ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse;
}(SpeakeasyBase));
export { ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse };
var ListDeployedDevicesDeviceResponse = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeviceResponse, _super);
    function ListDeployedDevicesDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse)
    ], ListDeployedDevicesDeviceResponse.prototype, "listDeployedDevicesDeviceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDeployedDevicesDeviceResponse.prototype, "statusCode", void 0);
    return ListDeployedDevicesDeviceResponse;
}(SpeakeasyBase));
export { ListDeployedDevicesDeviceResponse };
