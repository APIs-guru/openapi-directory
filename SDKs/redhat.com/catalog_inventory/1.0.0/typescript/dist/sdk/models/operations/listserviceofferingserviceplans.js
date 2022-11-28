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
var ListServiceOfferingServicePlansPathParams = /** @class */ (function (_super) {
    __extends(ListServiceOfferingServicePlansPathParams, _super);
    function ListServiceOfferingServicePlansPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ListServiceOfferingServicePlansPathParams.prototype, "id", void 0);
    return ListServiceOfferingServicePlansPathParams;
}(SpeakeasyBase));
export { ListServiceOfferingServicePlansPathParams };
var ListServiceOfferingServicePlansQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceOfferingServicePlansQueryParams, _super);
    function ListServiceOfferingServicePlansQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", Map)
    ], ListServiceOfferingServicePlansQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListServiceOfferingServicePlansQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListServiceOfferingServicePlansQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" }),
        __metadata("design:type", Map)
    ], ListServiceOfferingServicePlansQueryParams.prototype, "sortBy", void 0);
    return ListServiceOfferingServicePlansQueryParams;
}(SpeakeasyBase));
export { ListServiceOfferingServicePlansQueryParams };
var ListServiceOfferingServicePlansRequest = /** @class */ (function (_super) {
    __extends(ListServiceOfferingServicePlansRequest, _super);
    function ListServiceOfferingServicePlansRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceOfferingServicePlansPathParams)
    ], ListServiceOfferingServicePlansRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceOfferingServicePlansQueryParams)
    ], ListServiceOfferingServicePlansRequest.prototype, "queryParams", void 0);
    return ListServiceOfferingServicePlansRequest;
}(SpeakeasyBase));
export { ListServiceOfferingServicePlansRequest };
var ListServiceOfferingServicePlansResponse = /** @class */ (function (_super) {
    __extends(ListServiceOfferingServicePlansResponse, _super);
    function ListServiceOfferingServicePlansResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListServiceOfferingServicePlansResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorNotFound)
    ], ListServiceOfferingServicePlansResponse.prototype, "errorNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServicePlansCollection)
    ], ListServiceOfferingServicePlansResponse.prototype, "servicePlansCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListServiceOfferingServicePlansResponse.prototype, "statusCode", void 0);
    return ListServiceOfferingServicePlansResponse;
}(SpeakeasyBase));
export { ListServiceOfferingServicePlansResponse };
