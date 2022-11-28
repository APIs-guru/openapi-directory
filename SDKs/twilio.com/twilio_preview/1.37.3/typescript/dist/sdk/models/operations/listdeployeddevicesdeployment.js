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
export var ListDeployedDevicesDeploymentServerList = [
    "https://preview.twilio.com",
];
var ListDeployedDevicesDeploymentPathParams = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeploymentPathParams, _super);
    function ListDeployedDevicesDeploymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeploymentPathParams.prototype, "fleetSid", void 0);
    return ListDeployedDevicesDeploymentPathParams;
}(SpeakeasyBase));
export { ListDeployedDevicesDeploymentPathParams };
var ListDeployedDevicesDeploymentQueryParams = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeploymentQueryParams, _super);
    function ListDeployedDevicesDeploymentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesDeploymentQueryParams.prototype, "pageSize", void 0);
    return ListDeployedDevicesDeploymentQueryParams;
}(SpeakeasyBase));
export { ListDeployedDevicesDeploymentQueryParams };
var ListDeployedDevicesDeploymentSecurity = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeploymentSecurity, _super);
    function ListDeployedDevicesDeploymentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDeployedDevicesDeploymentSecurity.prototype, "accountSidAuthToken", void 0);
    return ListDeployedDevicesDeploymentSecurity;
}(SpeakeasyBase));
export { ListDeployedDevicesDeploymentSecurity };
var ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta, _super);
    function ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta.prototype, "url", void 0);
    return ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta;
}(SpeakeasyBase));
export { ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta };
var ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse, _super);
    function ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments", elemType: shared.PreviewDeployedDevicesFleetDeployment }),
        __metadata("design:type", Array)
    ], ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse.prototype, "deployments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta)
    ], ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse.prototype, "meta", void 0);
    return ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse;
}(SpeakeasyBase));
export { ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse };
var ListDeployedDevicesDeploymentRequest = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeploymentRequest, _super);
    function ListDeployedDevicesDeploymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeploymentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeployedDevicesDeploymentPathParams)
    ], ListDeployedDevicesDeploymentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeployedDevicesDeploymentQueryParams)
    ], ListDeployedDevicesDeploymentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeployedDevicesDeploymentSecurity)
    ], ListDeployedDevicesDeploymentRequest.prototype, "security", void 0);
    return ListDeployedDevicesDeploymentRequest;
}(SpeakeasyBase));
export { ListDeployedDevicesDeploymentRequest };
var ListDeployedDevicesDeploymentResponse = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeploymentResponse, _super);
    function ListDeployedDevicesDeploymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeploymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse)
    ], ListDeployedDevicesDeploymentResponse.prototype, "listDeployedDevicesDeploymentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDeployedDevicesDeploymentResponse.prototype, "statusCode", void 0);
    return ListDeployedDevicesDeploymentResponse;
}(SpeakeasyBase));
export { ListDeployedDevicesDeploymentResponse };
