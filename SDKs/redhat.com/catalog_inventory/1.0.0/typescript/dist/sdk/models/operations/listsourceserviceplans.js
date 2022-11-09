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
var ListSourceServicePlansPathParams = /** @class */ (function (_super) {
    __extends(ListSourceServicePlansPathParams, _super);
    function ListSourceServicePlansPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ListSourceServicePlansPathParams.prototype, "id", void 0);
    return ListSourceServicePlansPathParams;
}(SpeakeasyBase));
export { ListSourceServicePlansPathParams };
var ListSourceServicePlansQueryParams = /** @class */ (function (_super) {
    __extends(ListSourceServicePlansQueryParams, _super);
    function ListSourceServicePlansQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", Map)
    ], ListSourceServicePlansQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListSourceServicePlansQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListSourceServicePlansQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" }),
        __metadata("design:type", Map)
    ], ListSourceServicePlansQueryParams.prototype, "sortBy", void 0);
    return ListSourceServicePlansQueryParams;
}(SpeakeasyBase));
export { ListSourceServicePlansQueryParams };
var ListSourceServicePlansRequest = /** @class */ (function (_super) {
    __extends(ListSourceServicePlansRequest, _super);
    function ListSourceServicePlansRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListSourceServicePlansPathParams)
    ], ListSourceServicePlansRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSourceServicePlansQueryParams)
    ], ListSourceServicePlansRequest.prototype, "queryParams", void 0);
    return ListSourceServicePlansRequest;
}(SpeakeasyBase));
export { ListSourceServicePlansRequest };
var ListSourceServicePlansResponse = /** @class */ (function (_super) {
    __extends(ListSourceServicePlansResponse, _super);
    function ListSourceServicePlansResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSourceServicePlansResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorNotFound)
    ], ListSourceServicePlansResponse.prototype, "errorNotFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ServicePlansCollection)
    ], ListSourceServicePlansResponse.prototype, "servicePlansCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSourceServicePlansResponse.prototype, "statusCode", void 0);
    return ListSourceServicePlansResponse;
}(SpeakeasyBase));
export { ListSourceServicePlansResponse };
