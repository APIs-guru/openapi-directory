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
export var ListDeployedDevicesCertificateServerList = [
    "https://preview.twilio.com",
];
var ListDeployedDevicesCertificatePathParams = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesCertificatePathParams, _super);
    function ListDeployedDevicesCertificatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesCertificatePathParams.prototype, "fleetSid", void 0);
    return ListDeployedDevicesCertificatePathParams;
}(SpeakeasyBase));
export { ListDeployedDevicesCertificatePathParams };
var ListDeployedDevicesCertificateQueryParams = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesCertificateQueryParams, _super);
    function ListDeployedDevicesCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeviceSid" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesCertificateQueryParams.prototype, "deviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesCertificateQueryParams.prototype, "pageSize", void 0);
    return ListDeployedDevicesCertificateQueryParams;
}(SpeakeasyBase));
export { ListDeployedDevicesCertificateQueryParams };
var ListDeployedDevicesCertificateSecurity = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesCertificateSecurity, _super);
    function ListDeployedDevicesCertificateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDeployedDevicesCertificateSecurity.prototype, "accountSidAuthToken", void 0);
    return ListDeployedDevicesCertificateSecurity;
}(SpeakeasyBase));
export { ListDeployedDevicesCertificateSecurity };
var ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta, _super);
    function ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta.prototype, "url", void 0);
    return ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta;
}(SpeakeasyBase));
export { ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta };
var ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse, _super);
    function ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificates", elemType: shared.PreviewDeployedDevicesFleetCertificate }),
        __metadata("design:type", Array)
    ], ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse.prototype, "certificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta)
    ], ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse.prototype, "meta", void 0);
    return ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse;
}(SpeakeasyBase));
export { ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse };
var ListDeployedDevicesCertificateRequest = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesCertificateRequest, _super);
    function ListDeployedDevicesCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDeployedDevicesCertificateRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeployedDevicesCertificatePathParams)
    ], ListDeployedDevicesCertificateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeployedDevicesCertificateQueryParams)
    ], ListDeployedDevicesCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeployedDevicesCertificateSecurity)
    ], ListDeployedDevicesCertificateRequest.prototype, "security", void 0);
    return ListDeployedDevicesCertificateRequest;
}(SpeakeasyBase));
export { ListDeployedDevicesCertificateRequest };
var ListDeployedDevicesCertificateResponse = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesCertificateResponse, _super);
    function ListDeployedDevicesCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDeployedDevicesCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse)
    ], ListDeployedDevicesCertificateResponse.prototype, "listDeployedDevicesCertificateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDeployedDevicesCertificateResponse.prototype, "statusCode", void 0);
    return ListDeployedDevicesCertificateResponse;
}(SpeakeasyBase));
export { ListDeployedDevicesCertificateResponse };
