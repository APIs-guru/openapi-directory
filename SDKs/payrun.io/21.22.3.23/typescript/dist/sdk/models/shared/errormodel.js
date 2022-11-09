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
export var ErrorModelErrorModelErrorCategoryEnum;
(function (ErrorModelErrorModelErrorCategoryEnum) {
    ErrorModelErrorModelErrorCategoryEnum["General"] = "General";
    ErrorModelErrorModelErrorCategoryEnum["NotFound"] = "NotFound";
    ErrorModelErrorModelErrorCategoryEnum["NotAuthorised"] = "NotAuthorised";
    ErrorModelErrorModelErrorCategoryEnum["ValidationFailure"] = "ValidationFailure";
})(ErrorModelErrorModelErrorCategoryEnum || (ErrorModelErrorModelErrorCategoryEnum = {}));
// ErrorModelErrorModelErrors
/**
 * The error models' errors
**/
var ErrorModelErrorModelErrors = /** @class */ (function (_super) {
    __extends(ErrorModelErrorModelErrors, _super);
    function ErrorModelErrorModelErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Error" }),
        __metadata("design:type", Array)
    ], ErrorModelErrorModelErrors.prototype, "error", void 0);
    return ErrorModelErrorModelErrors;
}(SpeakeasyBase));
export { ErrorModelErrorModelErrors };
var ErrorModelErrorModel = /** @class */ (function (_super) {
    __extends(ErrorModelErrorModel, _super);
    function ErrorModelErrorModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ErrorModelErrorModel.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=ErrorCategory" }),
        __metadata("design:type", String)
    ], ErrorModelErrorModel.prototype, "errorCategory", void 0);
    __decorate([
        Metadata({ data: "json, name=Errors" }),
        __metadata("design:type", ErrorModelErrorModelErrors)
    ], ErrorModelErrorModel.prototype, "errors", void 0);
    return ErrorModelErrorModel;
}(SpeakeasyBase));
export { ErrorModelErrorModel };
var ErrorModel = /** @class */ (function (_super) {
    __extends(ErrorModel, _super);
    function ErrorModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ErrorModel" }),
        __metadata("design:type", ErrorModelErrorModel)
    ], ErrorModel.prototype, "errorModel", void 0);
    return ErrorModel;
}(SpeakeasyBase));
export { ErrorModel };
