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
var LineLineRoutesByIdsPathParams = /** @class */ (function (_super) {
    __extends(LineLineRoutesByIdsPathParams, _super);
    function LineLineRoutesByIdsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], LineLineRoutesByIdsPathParams.prototype, "ids", void 0);
    return LineLineRoutesByIdsPathParams;
}(SpeakeasyBase));
export { LineLineRoutesByIdsPathParams };
export var LineLineRoutesByIdsServiceTypesEnum;
(function (LineLineRoutesByIdsServiceTypesEnum) {
    LineLineRoutesByIdsServiceTypesEnum["Regular"] = "Regular";
    LineLineRoutesByIdsServiceTypesEnum["Night"] = "Night";
})(LineLineRoutesByIdsServiceTypesEnum || (LineLineRoutesByIdsServiceTypesEnum = {}));
var LineLineRoutesByIdsQueryParams = /** @class */ (function (_super) {
    __extends(LineLineRoutesByIdsQueryParams, _super);
    function LineLineRoutesByIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" }),
        __metadata("design:type", Array)
    ], LineLineRoutesByIdsQueryParams.prototype, "serviceTypes", void 0);
    return LineLineRoutesByIdsQueryParams;
}(SpeakeasyBase));
export { LineLineRoutesByIdsQueryParams };
var LineLineRoutesByIdsRequest = /** @class */ (function (_super) {
    __extends(LineLineRoutesByIdsRequest, _super);
    function LineLineRoutesByIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineLineRoutesByIdsPathParams)
    ], LineLineRoutesByIdsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineLineRoutesByIdsQueryParams)
    ], LineLineRoutesByIdsRequest.prototype, "queryParams", void 0);
    return LineLineRoutesByIdsRequest;
}(SpeakeasyBase));
export { LineLineRoutesByIdsRequest };
var LineLineRoutesByIdsResponse = /** @class */ (function (_super) {
    __extends(LineLineRoutesByIdsResponse, _super);
    function LineLineRoutesByIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], LineLineRoutesByIdsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LineLineRoutesByIdsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LineLineRoutesByIdsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLine }),
        __metadata("design:type", Array)
    ], LineLineRoutesByIdsResponse.prototype, "tflApiPresentationEntitiesLines", void 0);
    return LineLineRoutesByIdsResponse;
}(SpeakeasyBase));
export { LineLineRoutesByIdsResponse };
