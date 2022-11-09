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
export var LISTDEPLOYEDDEVICESFLEET_SERVERS = [
    "https://preview.twilio.com",
];
var ListDeployedDevicesFleetQueryParams = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesFleetQueryParams, _super);
    function ListDeployedDevicesFleetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesFleetQueryParams.prototype, "pageSize", void 0);
    return ListDeployedDevicesFleetQueryParams;
}(SpeakeasyBase));
export { ListDeployedDevicesFleetQueryParams };
var ListDeployedDevicesFleetSecurity = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesFleetSecurity, _super);
    function ListDeployedDevicesFleetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDeployedDevicesFleetSecurity.prototype, "accountSidAuthToken", void 0);
    return ListDeployedDevicesFleetSecurity;
}(SpeakeasyBase));
export { ListDeployedDevicesFleetSecurity };
var ListDeployedDevicesFleetRequest = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesFleetRequest, _super);
    function ListDeployedDevicesFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDeployedDevicesFleetRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDeployedDevicesFleetQueryParams)
    ], ListDeployedDevicesFleetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDeployedDevicesFleetSecurity)
    ], ListDeployedDevicesFleetRequest.prototype, "security", void 0);
    return ListDeployedDevicesFleetRequest;
}(SpeakeasyBase));
export { ListDeployedDevicesFleetRequest };
var ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta, _super);
    function ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta.prototype, "url", void 0);
    return ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta;
}(SpeakeasyBase));
export { ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta };
var ListDeployedDevicesFleetListDeployedDevicesFleetResponse = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesFleetListDeployedDevicesFleetResponse, _super);
    function ListDeployedDevicesFleetListDeployedDevicesFleetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=fleets", elemType: shared.PreviewDeployedDevicesFleet }),
        __metadata("design:type", Array)
    ], ListDeployedDevicesFleetListDeployedDevicesFleetResponse.prototype, "fleets", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta)
    ], ListDeployedDevicesFleetListDeployedDevicesFleetResponse.prototype, "meta", void 0);
    return ListDeployedDevicesFleetListDeployedDevicesFleetResponse;
}(SpeakeasyBase));
export { ListDeployedDevicesFleetListDeployedDevicesFleetResponse };
var ListDeployedDevicesFleetResponse = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesFleetResponse, _super);
    function ListDeployedDevicesFleetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDeployedDevicesFleetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDeployedDevicesFleetListDeployedDevicesFleetResponse)
    ], ListDeployedDevicesFleetResponse.prototype, "listDeployedDevicesFleetResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDeployedDevicesFleetResponse.prototype, "statusCode", void 0);
    return ListDeployedDevicesFleetResponse;
}(SpeakeasyBase));
export { ListDeployedDevicesFleetResponse };
