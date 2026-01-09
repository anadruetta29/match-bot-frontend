export class Score {

    public totalScore: number;
    public answersCount: number;

    constructor(totalScore: number, answersCount: number) {
        this.totalScore = totalScore;
        this.answersCount = answersCount;
    }

    public static fromObject(object: { [key: string]: any } | null | undefined): Score | undefined {
        if (!object) return undefined;

        return new Score(
            object.totalScore,
            object.answers?.length ?? 0
        );
    }
}