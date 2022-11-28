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
export var ListSimServerList = [
    "https://wireless.twilio.com",
];
var ListSimQueryParams = /** @class */ (function (_super) {
    __extends(ListSimQueryParams, _super);
    function ListSimQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EId" }),
        __metadata("design:type", String)
    ], ListSimQueryParams.prototype, "eId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Iccid" }),
        __metadata("design:type", String)
    ], ListSimQueryParams.prototype, "iccid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSimQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RatePlan" }),
        __metadata("design:type", String)
    ], ListSimQueryParams.prototype, "ratePlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SimRegistrationCode" }),
        __metadata("design:type", String)
    ], ListSimQueryParams.prototype, "simRegistrationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListSimQueryParams.prototype, "status", void 0);
    return ListSimQueryParams;
}(SpeakeasyBase));
export { ListSimQueryParams };
var ListSimSecurity = /** @class */ (function (_super) {
    __extends(ListSimSecurity, _super);
    function ListSimSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSimSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSimSecurity;
}(SpeakeasyBase));
export { ListSimSecurity };
var ListSimListSimResponseMeta = /** @class */ (function (_super) {
    __extends(ListSimListSimResponseMeta, _super);
    function ListSimListSimResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSimListSimResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSimListSimResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSimListSimResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSimListSimResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSimListSimResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSimListSimResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSimListSimResponseMeta.prototype, "url", void 0);
    return ListSimListSimResponseMeta;
}(SpeakeasyBase));
export { ListSimListSimResponseMeta };
var ListSimListSimResponse = /** @class */ (function (_super) {
    __extends(ListSimListSimResponse, _super);
    function ListSimListSimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSimListSimResponseMeta)
    ], ListSimListSimResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sims", elemType: shared.WirelessV1Sim }),
        __metadata("design:type", Array)
    ], ListSimListSimResponse.prototype, "sims", void 0);
    return ListSimListSimResponse;
}(SpeakeasyBase));
export { ListSimListSimResponse };
var ListSimRequest = /** @class */ (function (_super) {
    __extends(ListSimRequest, _super);
    function ListSimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSimRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSimQueryParams)
    ], ListSimRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSimSecurity)
    ], ListSimRequest.prototype, "security", void 0);
    return ListSimRequest;
}(SpeakeasyBase));
export { ListSimRequest };
var ListSimResponse = /** @class */ (function (_super) {
    __extends(ListSimResponse, _super);
    function ListSimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSimResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSimListSimResponse)
    ], ListSimResponse.prototype, "listSimResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSimResponse.prototype, "statusCode", void 0);
    return ListSimResponse;
}(SpeakeasyBase));
export { ListSimResponse };
