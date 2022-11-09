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
export var ProBowlersFormatEnum;
(function (ProBowlersFormatEnum) {
    ProBowlersFormatEnum["Xml"] = "XML";
    ProBowlersFormatEnum["Json"] = "JSON";
})(ProBowlersFormatEnum || (ProBowlersFormatEnum = {}));
var ProBowlersPathParams = /** @class */ (function (_super) {
    __extends(ProBowlersPathParams, _super);
    function ProBowlersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], ProBowlersPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], ProBowlersPathParams.prototype, "season", void 0);
    return ProBowlersPathParams;
}(SpeakeasyBase));
export { ProBowlersPathParams };
var ProBowlersRequest = /** @class */ (function (_super) {
    __extends(ProBowlersRequest, _super);
    function ProBowlersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProBowlersPathParams)
    ], ProBowlersRequest.prototype, "pathParams", void 0);
    return ProBowlersRequest;
}(SpeakeasyBase));
export { ProBowlersRequest };
var ProBowlersResponse = /** @class */ (function (_super) {
    __extends(ProBowlersResponse, _super);
    function ProBowlersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProBowlersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], ProBowlersResponse.prototype, "playerInfos", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProBowlersResponse.prototype, "statusCode", void 0);
    return ProBowlersResponse;
}(SpeakeasyBase));
export { ProBowlersResponse };
