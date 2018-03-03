package com.maze.solver.derek_webapp.services;

import com.maze.solver.derek_webapp.models.MazeAnswerResponse;
import com.maze.solver.derek_webapp.models.MazeInformationRequest;
import org.springframework.stereotype.Component;

@Component
public class MazeSolvingService {
    public MazeAnswerResponse solveMaze(MazeInformationRequest mazeInformationRequest) {
        MazeAnswerResponse response = new MazeAnswerResponse();
        response.setMinNumberSteps(10); // Hard-coded for now
        return response;
    }
}
