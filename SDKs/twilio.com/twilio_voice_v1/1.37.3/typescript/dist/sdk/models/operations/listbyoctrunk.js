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
export var ListByocTrunkServerList = [
    "https://voice.twilio.com",
];
var ListByocTrunkQueryParams = /** @class */ (function (_super) {
    __extends(ListByocTrunkQueryParams, _super);
    function ListByocTrunkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListByocTrunkQueryParams.prototype, "pageSize", void 0);
    return ListByocTrunkQueryParams;
}(SpeakeasyBase));
export { ListByocTrunkQueryParams };
var ListByocTrunkSecurity = /** @class */ (function (_super) {
    __extends(ListByocTrunkSecurity, _super);
    function ListByocTrunkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListByocTrunkSecurity.prototype, "accountSidAuthToken", void 0);
    return ListByocTrunkSecurity;
}(SpeakeasyBase));
export { ListByocTrunkSecurity };
var ListByocTrunkListByocTrunkResponseMeta = /** @class */ (function (_super) {
    __extends(ListByocTrunkListByocTrunkResponseMeta, _super);
    function ListByocTrunkListByocTrunkResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListByocTrunkListByocTrunkResponseMeta.prototype, "url", void 0);
    return ListByocTrunkListByocTrunkResponseMeta;
}(SpeakeasyBase));
export { ListByocTrunkListByocTrunkResponseMeta };
var ListByocTrunkListByocTrunkResponse = /** @class */ (function (_super) {
    __extends(ListByocTrunkListByocTrunkResponse, _super);
    function ListByocTrunkListByocTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=byoc_trunks", elemType: shared.VoiceV1ByocTrunk }),
        __metadata("design:type", Array)
    ], ListByocTrunkListByocTrunkResponse.prototype, "byocTrunks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListByocTrunkListByocTrunkResponseMeta)
    ], ListByocTrunkListByocTrunkResponse.prototype, "meta", void 0);
    return ListByocTrunkListByocTrunkResponse;
}(SpeakeasyBase));
export { ListByocTrunkListByocTrunkResponse };
var ListByocTrunkRequest = /** @class */ (function (_super) {
    __extends(ListByocTrunkRequest, _super);
    function ListByocTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListByocTrunkRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListByocTrunkQueryParams)
    ], ListByocTrunkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListByocTrunkSecurity)
    ], ListByocTrunkRequest.prototype, "security", void 0);
    return ListByocTrunkRequest;
}(SpeakeasyBase));
export { ListByocTrunkRequest };
var ListByocTrunkResponse = /** @class */ (function (_super) {
    __extends(ListByocTrunkResponse, _super);
    function ListByocTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListByocTrunkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListByocTrunkListByocTrunkResponse)
    ], ListByocTrunkResponse.prototype, "listByocTrunkResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListByocTrunkResponse.prototype, "statusCode", void 0);
    return ListByocTrunkResponse;
}(SpeakeasyBase));
export { ListByocTrunkResponse };
