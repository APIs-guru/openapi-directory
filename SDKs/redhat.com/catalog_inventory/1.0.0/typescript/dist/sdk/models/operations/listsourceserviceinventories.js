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
var ListSourceServiceInventoriesPathParams = /** @class */ (function (_super) {
    __extends(ListSourceServiceInventoriesPathParams, _super);
    function ListSourceServiceInventoriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ListSourceServiceInventoriesPathParams.prototype, "id", void 0);
    return ListSourceServiceInventoriesPathParams;
}(SpeakeasyBase));
export { ListSourceServiceInventoriesPathParams };
var ListSourceServiceInventoriesQueryParams = /** @class */ (function (_super) {
    __extends(ListSourceServiceInventoriesQueryParams, _super);
    function ListSourceServiceInventoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", Map)
    ], ListSourceServiceInventoriesQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListSourceServiceInventoriesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListSourceServiceInventoriesQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" }),
        __metadata("design:type", Map)
    ], ListSourceServiceInventoriesQueryParams.prototype, "sortBy", void 0);
    return ListSourceServiceInventoriesQueryParams;
}(SpeakeasyBase));
export { ListSourceServiceInventoriesQueryParams };
var ListSourceServiceInventoriesRequest = /** @class */ (function (_super) {
    __extends(ListSourceServiceInventoriesRequest, _super);
    function ListSourceServiceInventoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSourceServiceInventoriesPathParams)
    ], ListSourceServiceInventoriesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSourceServiceInventoriesQueryParams)
    ], ListSourceServiceInventoriesRequest.prototype, "queryParams", void 0);
    return ListSourceServiceInventoriesRequest;
}(SpeakeasyBase));
export { ListSourceServiceInventoriesRequest };
var ListSourceServiceInventoriesResponse = /** @class */ (function (_super) {
    __extends(ListSourceServiceInventoriesResponse, _super);
    function ListSourceServiceInventoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSourceServiceInventoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorNotFound)
    ], ListSourceServiceInventoriesResponse.prototype, "errorNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceInventoriesCollection)
    ], ListSourceServiceInventoriesResponse.prototype, "serviceInventoriesCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSourceServiceInventoriesResponse.prototype, "statusCode", void 0);
    return ListSourceServiceInventoriesResponse;
}(SpeakeasyBase));
export { ListSourceServiceInventoriesResponse };
