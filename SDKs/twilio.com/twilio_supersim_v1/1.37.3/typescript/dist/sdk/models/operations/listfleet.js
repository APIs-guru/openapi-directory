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
export var ListFleetServerList = [
    "https://supersim.twilio.com",
];
var ListFleetQueryParams = /** @class */ (function (_super) {
    __extends(ListFleetQueryParams, _super);
    function ListFleetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkAccessProfile" }),
        __metadata("design:type", String)
    ], ListFleetQueryParams.prototype, "networkAccessProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFleetQueryParams.prototype, "pageSize", void 0);
    return ListFleetQueryParams;
}(SpeakeasyBase));
export { ListFleetQueryParams };
var ListFleetSecurity = /** @class */ (function (_super) {
    __extends(ListFleetSecurity, _super);
    function ListFleetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFleetSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFleetSecurity;
}(SpeakeasyBase));
export { ListFleetSecurity };
var ListFleetListFleetResponseMeta = /** @class */ (function (_super) {
    __extends(ListFleetListFleetResponseMeta, _super);
    function ListFleetListFleetResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFleetListFleetResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFleetListFleetResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFleetListFleetResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFleetListFleetResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFleetListFleetResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFleetListFleetResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFleetListFleetResponseMeta.prototype, "url", void 0);
    return ListFleetListFleetResponseMeta;
}(SpeakeasyBase));
export { ListFleetListFleetResponseMeta };
var ListFleetListFleetResponse = /** @class */ (function (_super) {
    __extends(ListFleetListFleetResponse, _super);
    function ListFleetListFleetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fleets", elemType: shared.SupersimV1Fleet }),
        __metadata("design:type", Array)
    ], ListFleetListFleetResponse.prototype, "fleets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListFleetListFleetResponseMeta)
    ], ListFleetListFleetResponse.prototype, "meta", void 0);
    return ListFleetListFleetResponse;
}(SpeakeasyBase));
export { ListFleetListFleetResponse };
var ListFleetRequest = /** @class */ (function (_super) {
    __extends(ListFleetRequest, _super);
    function ListFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListFleetRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFleetQueryParams)
    ], ListFleetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFleetSecurity)
    ], ListFleetRequest.prototype, "security", void 0);
    return ListFleetRequest;
}(SpeakeasyBase));
export { ListFleetRequest };
var ListFleetResponse = /** @class */ (function (_super) {
    __extends(ListFleetResponse, _super);
    function ListFleetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListFleetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFleetListFleetResponse)
    ], ListFleetResponse.prototype, "listFleetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListFleetResponse.prototype, "statusCode", void 0);
    return ListFleetResponse;
}(SpeakeasyBase));
export { ListFleetResponse };
