import type { Error } from "./error";
import { Errors } from "./errors";

export class ErrorHandler {

    public static handleError(error: Error): string {
        switch (error.message) {
            case "Internal error":
                return Errors.INTERNAL_ERROR;

            case "Session was not found":
                return Errors.SESSION_NOT_FOUND;

            default:
                return Errors.INTERNAL_ERROR;
        }
    }

}