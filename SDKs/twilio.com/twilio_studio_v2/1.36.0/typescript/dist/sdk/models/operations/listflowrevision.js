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
export var LISTFLOWREVISION_SERVERS = [
    "https://studio.twilio.com",
];
var ListFlowRevisionPathParams = /** @class */ (function (_super) {
    __extends(ListFlowRevisionPathParams, _super);
    function ListFlowRevisionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], ListFlowRevisionPathParams.prototype, "sid", void 0);
    return ListFlowRevisionPathParams;
}(SpeakeasyBase));
export { ListFlowRevisionPathParams };
var ListFlowRevisionQueryParams = /** @class */ (function (_super) {
    __extends(ListFlowRevisionQueryParams, _super);
    function ListFlowRevisionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFlowRevisionQueryParams.prototype, "pageSize", void 0);
    return ListFlowRevisionQueryParams;
}(SpeakeasyBase));
export { ListFlowRevisionQueryParams };
var ListFlowRevisionSecurity = /** @class */ (function (_super) {
    __extends(ListFlowRevisionSecurity, _super);
    function ListFlowRevisionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFlowRevisionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFlowRevisionSecurity;
}(SpeakeasyBase));
export { ListFlowRevisionSecurity };
var ListFlowRevisionRequest = /** @class */ (function (_super) {
    __extends(ListFlowRevisionRequest, _super);
    function ListFlowRevisionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFlowRevisionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFlowRevisionPathParams)
    ], ListFlowRevisionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFlowRevisionQueryParams)
    ], ListFlowRevisionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFlowRevisionSecurity)
    ], ListFlowRevisionRequest.prototype, "security", void 0);
    return ListFlowRevisionRequest;
}(SpeakeasyBase));
export { ListFlowRevisionRequest };
var ListFlowRevisionListFlowRevisionResponseMeta = /** @class */ (function (_super) {
    __extends(ListFlowRevisionListFlowRevisionResponseMeta, _super);
    function ListFlowRevisionListFlowRevisionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFlowRevisionListFlowRevisionResponseMeta.prototype, "url", void 0);
    return ListFlowRevisionListFlowRevisionResponseMeta;
}(SpeakeasyBase));
export { ListFlowRevisionListFlowRevisionResponseMeta };
var ListFlowRevisionListFlowRevisionResponse = /** @class */ (function (_super) {
    __extends(ListFlowRevisionListFlowRevisionResponse, _super);
    function ListFlowRevisionListFlowRevisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListFlowRevisionListFlowRevisionResponseMeta)
    ], ListFlowRevisionListFlowRevisionResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=revisions", elemType: shared.StudioV2FlowFlowRevision }),
        __metadata("design:type", Array)
    ], ListFlowRevisionListFlowRevisionResponse.prototype, "revisions", void 0);
    return ListFlowRevisionListFlowRevisionResponse;
}(SpeakeasyBase));
export { ListFlowRevisionListFlowRevisionResponse };
var ListFlowRevisionResponse = /** @class */ (function (_super) {
    __extends(ListFlowRevisionResponse, _super);
    function ListFlowRevisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFlowRevisionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFlowRevisionListFlowRevisionResponse)
    ], ListFlowRevisionResponse.prototype, "listFlowRevisionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListFlowRevisionResponse.prototype, "statusCode", void 0);
    return ListFlowRevisionResponse;
}(SpeakeasyBase));
export { ListFlowRevisionResponse };
