import { createSlice } from '@reduxjs/toolkit';
import rozariosProject from '../../images/rozarios-project.png'
import imageSearchProject from '../../images/image-search-project.png'
import quizProject from '../../images/quiz-project.png'

export const slice = createSlice({
    name: 'projects',
    initialState: {
        list: [
            {
                id: 1,
                title: 'Rozarios Project',
                description: 'Restauracja Rozario\'s mieści się przy Al. Ks. Kard. Stefana Wyszyńskiego 67. Powstała w 1999 roku i bardzo szybko zdobyła uznanie zarówno wśród mieszkańców Retkinia jak i gości z najdalszych zakątków Łodzi.',
                img: rozariosProject,
                live: 'https://rozarios.herokuapp.com/',
                code: 'https://github.com/Cris281172/rozarios-page',
                visible: false,
            },
            // {
            //     id: 2,
            //     title: 'Images Search',
            //     description: 'Doloremque aperiam autem ut necessitatibus repellat error quod ut. Eum quia ab enim quia et. Ea tempora quae sed totam blanditiis voluptatibus qui. Nostrum in at libero. Ab sunt ad qui provident placeat nihil praesentium.',
            //     img: imageSearchProject,
            //     live: 'https://rozarios.herokuapp.com/',
            //     code: 'https://github.com/Cris281172/rozarios-page',
            //     visible: false,
            // },
            // {
            //     id: 3,
            //     title: 'Quiz Programilonerzy',
            //     description: 'Doloremque aperiam autem ut necessitatibus repellat error quod ut. Eum quia ab enim quia et. Ea tempora quae sed totam blanditiis voluptatibus qui. Nostrum in at libero. Ab sunt ad qui provident placeat nihil praesentium.',
            //     img: quizProject,
            //     live: 'https://rozarios.herokuapp.com/',
            //     code: 'https://github.com/Cris281172/rozarios-page',
            //     visible: false,
            // }
        ],
    },
    reducers: {
        switchProjectVisible: (state, action) => {

        }
    }
})

export const {switchProjectVisible} = slice.actions;
export const projectsList = state => state.projects.list;

export default slice.reducer;