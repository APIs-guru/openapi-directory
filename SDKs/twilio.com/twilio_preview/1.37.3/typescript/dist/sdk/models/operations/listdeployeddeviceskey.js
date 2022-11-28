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
export var ListDeployedDevicesKeyServerList = [
    "https://preview.twilio.com",
];
var ListDeployedDevicesKeyPathParams = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesKeyPathParams, _super);
    function ListDeployedDevicesKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesKeyPathParams.prototype, "fleetSid", void 0);
    return ListDeployedDevicesKeyPathParams;
}(SpeakeasyBase));
export { ListDeployedDevicesKeyPathParams };
var ListDeployedDevicesKeyQueryParams = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesKeyQueryParams, _super);
    function ListDeployedDevicesKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeviceSid" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesKeyQueryParams.prototype, "deviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesKeyQueryParams.prototype, "pageSize", void 0);
    return ListDeployedDevicesKeyQueryParams;
}(SpeakeasyBase));
export { ListDeployedDevicesKeyQueryParams };
var ListDeployedDevicesKeySecurity = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesKeySecurity, _super);
    function ListDeployedDevicesKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDeployedDevicesKeySecurity.prototype, "accountSidAuthToken", void 0);
    return ListDeployedDevicesKeySecurity;
}(SpeakeasyBase));
export { ListDeployedDevicesKeySecurity };
var ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta, _super);
    function ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta.prototype, "url", void 0);
    return ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta;
}(SpeakeasyBase));
export { ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta };
var ListDeployedDevicesKeyListDeployedDevicesKeyResponse = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesKeyListDeployedDevicesKeyResponse, _super);
    function ListDeployedDevicesKeyListDeployedDevicesKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys", elemType: shared.PreviewDeployedDevicesFleetKey }),
        __metadata("design:type", Array)
    ], ListDeployedDevicesKeyListDeployedDevicesKeyResponse.prototype, "keys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta)
    ], ListDeployedDevicesKeyListDeployedDevicesKeyResponse.prototype, "meta", void 0);
    return ListDeployedDevicesKeyListDeployedDevicesKeyResponse;
}(SpeakeasyBase));
export { ListDeployedDevicesKeyListDeployedDevicesKeyResponse };
var ListDeployedDevicesKeyRequest = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesKeyRequest, _super);
    function ListDeployedDevicesKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDeployedDevicesKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeployedDevicesKeyPathParams)
    ], ListDeployedDevicesKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeployedDevicesKeyQueryParams)
    ], ListDeployedDevicesKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeployedDevicesKeySecurity)
    ], ListDeployedDevicesKeyRequest.prototype, "security", void 0);
    return ListDeployedDevicesKeyRequest;
}(SpeakeasyBase));
export { ListDeployedDevicesKeyRequest };
var ListDeployedDevicesKeyResponse = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesKeyResponse, _super);
    function ListDeployedDevicesKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDeployedDevicesKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeployedDevicesKeyListDeployedDevicesKeyResponse)
    ], ListDeployedDevicesKeyResponse.prototype, "listDeployedDevicesKeyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDeployedDevicesKeyResponse.prototype, "statusCode", void 0);
    return ListDeployedDevicesKeyResponse;
}(SpeakeasyBase));
export { ListDeployedDevicesKeyResponse };
