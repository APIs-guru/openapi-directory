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
var LineRouteByModePathParams = /** @class */ (function (_super) {
    __extends(LineRouteByModePathParams, _super);
    function LineRouteByModePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modes" }),
        __metadata("design:type", Array)
    ], LineRouteByModePathParams.prototype, "modes", void 0);
    return LineRouteByModePathParams;
}(SpeakeasyBase));
export { LineRouteByModePathParams };
export var LineRouteByModeServiceTypesEnum;
(function (LineRouteByModeServiceTypesEnum) {
    LineRouteByModeServiceTypesEnum["Regular"] = "Regular";
    LineRouteByModeServiceTypesEnum["Night"] = "Night";
})(LineRouteByModeServiceTypesEnum || (LineRouteByModeServiceTypesEnum = {}));
var LineRouteByModeQueryParams = /** @class */ (function (_super) {
    __extends(LineRouteByModeQueryParams, _super);
    function LineRouteByModeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" }),
        __metadata("design:type", Array)
    ], LineRouteByModeQueryParams.prototype, "serviceTypes", void 0);
    return LineRouteByModeQueryParams;
}(SpeakeasyBase));
export { LineRouteByModeQueryParams };
var LineRouteByModeRequest = /** @class */ (function (_super) {
    __extends(LineRouteByModeRequest, _super);
    function LineRouteByModeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineRouteByModePathParams)
    ], LineRouteByModeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineRouteByModeQueryParams)
    ], LineRouteByModeRequest.prototype, "queryParams", void 0);
    return LineRouteByModeRequest;
}(SpeakeasyBase));
export { LineRouteByModeRequest };
var LineRouteByModeResponse = /** @class */ (function (_super) {
    __extends(LineRouteByModeResponse, _super);
    function LineRouteByModeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], LineRouteByModeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LineRouteByModeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LineRouteByModeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLine }),
        __metadata("design:type", Array)
    ], LineRouteByModeResponse.prototype, "tflApiPresentationEntitiesLines", void 0);
    return LineRouteByModeResponse;
}(SpeakeasyBase));
export { LineRouteByModeResponse };
