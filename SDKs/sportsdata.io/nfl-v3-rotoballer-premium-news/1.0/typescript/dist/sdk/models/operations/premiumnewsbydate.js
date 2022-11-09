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
export var PremiumNewsByDateFormatEnum;
(function (PremiumNewsByDateFormatEnum) {
    PremiumNewsByDateFormatEnum["Xml"] = "xml";
    PremiumNewsByDateFormatEnum["Json"] = "json";
})(PremiumNewsByDateFormatEnum || (PremiumNewsByDateFormatEnum = {}));
var PremiumNewsByDatePathParams = /** @class */ (function (_super) {
    __extends(PremiumNewsByDatePathParams, _super);
    function PremiumNewsByDatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], PremiumNewsByDatePathParams.prototype, "date", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], PremiumNewsByDatePathParams.prototype, "format", void 0);
    return PremiumNewsByDatePathParams;
}(SpeakeasyBase));
export { PremiumNewsByDatePathParams };
var PremiumNewsByDateRequest = /** @class */ (function (_super) {
    __extends(PremiumNewsByDateRequest, _super);
    function PremiumNewsByDateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PremiumNewsByDatePathParams)
    ], PremiumNewsByDateRequest.prototype, "pathParams", void 0);
    return PremiumNewsByDateRequest;
}(SpeakeasyBase));
export { PremiumNewsByDateRequest };
var PremiumNewsByDateResponse = /** @class */ (function (_super) {
    __extends(PremiumNewsByDateResponse, _super);
    function PremiumNewsByDateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PremiumNewsByDateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], PremiumNewsByDateResponse.prototype, "news", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PremiumNewsByDateResponse.prototype, "statusCode", void 0);
    return PremiumNewsByDateResponse;
}(SpeakeasyBase));
export { PremiumNewsByDateResponse };
